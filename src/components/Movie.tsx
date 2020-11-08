import {
  Container,
  Poster,
  Header,
  Content,
  InfoList,
  GenresList,
  Genre,
  Rating
} from '@/styles/components/movie'

export interface IMovieProps {
  title: string
  poster: string
  genres: string[]
  overview: string
  releaseDate: string

  budget?: string
  profit?: string
  status?: string
  average?: string
  revenue?: string
  runtime?: string
  isDetails?: boolean
  originalLanguage?: Promise<string> | string
}

const Movie: React.FC<IMovieProps> = ({
  isDetails = false,
  title,
  poster,
  genres,
  overview,
  releaseDate,
  budget,
  profit,
  status,
  average,
  revenue,
  runtime,
  originalLanguage
}) => {
  return (
    <Container isDetails={isDetails}>
      <Poster>
        {!poster && (
          <img
            src={`https://dummyimage.com/300x300/ccc/a12&text=${title}`}
            alt={title}
          />
        )}
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      </Poster>

      <Header isDetails={isDetails}>
        <h1>{title}</h1>
        <span>{releaseDate}</span>
        <Rating isDetails={isDetails}>{average}</Rating>
      </Header>

      <Content>
        <section>
          {isDetails && <h2>Sinopse</h2>}
          {/* eslint-disable-next-line multiline-ternary */}
          {!overview ? (
            <p>Ops, não encontramos o resumo deste título :(</p>
          ) : (
            <p>{overview}</p>
          )}
        </section>

        {isDetails && (
          <section>
            <h2>Informações</h2>
            <InfoList>
              <li>
                <h3>Situação</h3>
                <span>{status}</span>
              </li>

              <li>
                <h3>Idioma</h3>
                <span>{originalLanguage}</span>
              </li>

              <li>
                <h3>Duração</h3>
                <span>{runtime}</span>
              </li>

              <li>
                <h3>Orçamento</h3>
                <span>{budget}</span>
              </li>

              <li>
                <h3>Receita</h3>
                <span>{revenue}</span>
              </li>

              <li>
                <h3>Lucro</h3>
                <span>{profit}</span>
              </li>
            </InfoList>
          </section>
        )}

        <section style={{ marginTop: 40 }}>
          <GenresList>
            {genres && genres.map(genre => <Genre key={genre}>{genre}</Genre>)}
          </GenresList>
        </section>
      </Content>
    </Container>
  )
}

export default Movie
