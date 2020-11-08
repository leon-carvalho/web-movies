import Link from 'next/link'
import {
  Container,
  Scary,
  LeftEye,
  RightEye,
  EyeBall
} from '@/styles/pages/notFound'

export default function NotFound(): JSX.Element {
  return (
    <Container>
      <main>
        <h1>
          4
          <Scary>
            <LeftEye>
              <EyeBall />
            </LeftEye>
            <RightEye>
              <EyeBall />
            </RightEye>
          </Scary>
          4
        </h1>
      </main>

      <footer>
        <nav>
          <Link href="/">
            <a>
              <span>Voltar para página inicial</span>
            </a>
          </Link>
        </nav>
      </footer>
    </Container>
  )
}
