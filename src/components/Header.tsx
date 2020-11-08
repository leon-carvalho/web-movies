import { Container } from '@/styles/components/header'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  const goBack = () => router.back()

  return (
    <Container>
      <h1 onClick={goBack}>Movies</h1>
    </Container>
  )
}

export default Header
