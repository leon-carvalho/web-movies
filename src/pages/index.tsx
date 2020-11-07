import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'

import Header from '@/components/Header'
import MovieCard from '@/components/MovieCard'
import { SearchBar } from '@/styles/components/searchbar'

const Container = styled.div`
  padding: 20px 24px;
`

export default function Home(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <Container>
          <SearchBar
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Busque um filme por nome, ano ou gênero..."
          />

          <MovieCard />
        </Container>
      </main>
    </div>
  )
}
