import {
  Container,
  Content,
  Genre,
  Header,
  Poster,
  Rating
} from '@/styles/components/movieCard'

export interface IMovieCardProps {
  isDetails?: boolean
}

const MovieCard: React.FC<IMovieCardProps> = ({ isDetails }) => {
  return (
    <Container isDetails={isDetails}>
      <Poster>
        <img
          src="https://image.tmdb.org/t/p/w500/334CebHp60Kg8xhMnJrrTtgiRxK.jpg"
          alt="Thor"
        />
      </Poster>

      <Header isDetails={isDetails}>
        <h1>Thor:Ragnarok</h1>
        <span>25/10/2017</span>
        <Rating isDetails={isDetails}>88%</Rating>
      </Header>

      <Content>
        <section>
          {isDetails && <h2>Sinopse</h2>}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, quis? At odio voluptatum cupiditate sequi ullam
            assumenda soluta incidunt architecto modi accusantium nesciunt
            repudiandae cumque facilis perspiciatis minus, quisquam quam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Minima culpa
            placeat quaerat nam, est quasi nostrum ipsum natus inventore iusto
            dolor architecto id accusamus adipisci nulla ipsam quos ab dolore.
          </p>
        </section>

        {isDetails && (
          <section>
            <h2>Informações</h2>
            <ul>
              <li>
                <h3>Situação</h3>
                <span>Lançado</span>
              </li>

              <li>
                <h3>Situação</h3>
                <span>Lançado</span>
              </li>

              <li>
                <h3>Situação</h3>
                <span>Lançado</span>
              </li>
            </ul>
          </section>
        )}

        <section style={{ marginTop: 40 }}>
          <ul>
            <li>
              <Genre>Ação</Genre>
            </li>
            <li>
              <Genre>Aventura</Genre>
            </li>
            <li>
              <Genre>Aventura</Genre>
            </li>

            <li>
              <Genre>Ação</Genre>
            </li>
            <li>
              <Genre>Aventura</Genre>
            </li>
            <li>
              <Genre>Aventura</Genre>
            </li>
          </ul>
        </section>
      </Content>
    </Container>
  )
}

export default MovieCard
