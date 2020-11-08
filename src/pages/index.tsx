import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { useState, useCallback, FormEvent } from 'react'

import api from '@/services/api'

import Movie from '@/components/Movie'
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'
import { Container } from '@/styles/pages/home'
import { SearchBar } from '@/styles/components/searchbar'

import { formatPercent } from '@/utils/formatPercentage'
import { formatToBrazilianDate } from '@/utils/formatDate'

interface IMovieProps {
  id: number
  title: string
  overview: string
  genre_id: string
  poster_path: string
  genre_name: string[]
  vote_average: number
  release_date: string
}

interface IHomeProps {
  movies: IMovieProps[]
}

export default function Home({ movies }: IHomeProps): JSX.Element {
  const router = useRouter()
  const itemsPerPage = 5

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isErrored, setIsErrored] = useState(false)

  const updateSearchTerm = useCallback(event => {
    setIsErrored(false)
    setSearchTerm(event.target.value)
  }, [])

  const handleSearch = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      if (!searchTerm || searchTerm === '') {
        setIsErrored(true)
      } else {
        setIsErrored(false)
        router.push(`/?search=${searchTerm}`)
      }
    },
    [searchTerm]
  )

  const changePage = useCallback((page: number) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }, [])

  const indexOfLastMovie = currentPage * itemsPerPage
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

  return (
    <>
      <Head>
        <title>Movie | busque filmes do the Movie DB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <Container>
          <form onSubmit={handleSearch}>
            <label htmlFor="search">
              <SearchBar
                type="search"
                id="search"
                name="search"
                isErrored={isErrored}
                value={searchTerm}
                placeholder="Busque um filme por nome, ano ou gênero"
                onChange={updateSearchTerm}
              />
            </label>
          </form>

          {currentMovies?.map(movie => {
            return (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <a>
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    genres={movie.genre_name}
                    overview={movie.overview}
                    poster={movie.poster_path}
                    average={formatPercent(movie.vote_average)}
                    releaseDate={formatToBrazilianDate(movie.release_date)}
                  />
                </a>
              </Link>
            )
          })}
        </Container>

        <footer>
          <Pagination
            itemsPerPage={5}
            onChange={changePage}
            totalOfItems={movies.length}
          />
        </footer>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { search } = context.query

  if (search) {
    const getMovie = await api.get('/search/movie', {
      params: {
        api_key: process.env.API_KEY,
        language: 'pt-BR',
        region: 'BR',
        query: search
      }
    })

    const getAllMovieGenres = await api.get('/genre/movie/list', {
      params: {
        api_key: process.env.API_KEY,
        language: 'pt-BR'
      }
    })

    const response = await Promise.all([getMovie, getAllMovieGenres])

    const moviesWithGenreName = response[0].data.results.map(movie => {
      // eslint-disable-next-line
      const genreNames = movie.genre_ids.map(genreId => {
        const result = response[1].data.genres.find(
          genre => genre.id === genreId
        )
        if (result) return result.name
      })

      return {
        ...movie,
        genre_name: genreNames
      }
    })

    return {
      props: {
        movies: moviesWithGenreName
      }
    }
  } else {
    return {
      props: {
        movies: []
      }
    }
  }
}
