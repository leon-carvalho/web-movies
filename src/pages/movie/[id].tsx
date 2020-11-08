import api from '@/services/api'
import Header from '@/components/Header'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Movie from '@/components/Movie'

import { formatPercent } from '@/utils/formatPercentage'
import { formatToUsDolar } from '@/utils/formatToDollar'
import { formatToBrazilianDate } from '@/utils/formatDate'
import { formatMovieStatus } from '@/utils/formatMovieStatus'
import { convertMinutesToHourAndMinutes } from '@/utils/convertMinutesToHours'
import { formatLanguage } from '@/utils/formatLanguageCode'

type IGenre = {
  id: number
  name: string
}

interface IMovie {
  id: number
  title: string
  genres: IGenre[]
  overview: string
  poster_path: string
  release_date: string

  budget: number
  profit: number
  status: string
  average: string
  revenue: number
  runtime: number
  isDetails: boolean
  vote_average: number
}

interface ITrailer {
  key: string
}

interface IMovieDetailsProps {
  movie: IMovie
  trailer: ITrailer
  movieLanguage: string
}

export default function MovieDetails({
  movie,
  trailer,
  movieLanguage
}: IMovieDetailsProps): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>carregando...</h1>
  }

  return (
    <>
      <Header />
      <Movie
        isDetails
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster={movie.poster_path}
        status={formatMovieStatus(movie.status)}
        average={formatPercent(movie.vote_average)}
        runtime={convertMinutesToHourAndMinutes(movie.runtime)}
        releaseDate={formatToBrazilianDate(movie.release_date)}
        genres={movie.genres.map(genre => {
          return genre.name
        })}
        budget={formatToUsDolar(movie.budget)}
        revenue={formatToUsDolar(movie.revenue)}
        profit={formatToUsDolar(movie.revenue - movie.budget)}
        originalLanguage={movieLanguage}
      />

      {trailer && (
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params
  const oneMinute = 60

  const getMovieDetails = await api.get(`/movie/${id}`, {
    params: {
      api_key: process.env.API_KEY,
      language: 'pt-BR',
      region: 'BR'
    }
  })
  const getMovieTrailer = await api.get(`/movie/${id}/videos`, {
    params: {
      api_key: process.env.API_KEY,
      language: 'pt-BR'
    }
  })

  const response = await Promise.all([getMovieDetails, getMovieTrailer])

  const hasTrailer = response[1].data.results[0]
    ? response[1].data.results[0]
    : null

  const formattedLanguage = await formatLanguage(
    response[0].data.original_language
  )

  return {
    props: {
      movie: response[0].data,
      trailer: hasTrailer,
      movieLanguage: formattedLanguage
    },
    revalidate: oneMinute
  }
}
