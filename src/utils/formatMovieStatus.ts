const formatMovieStatus = (status: string): string => {
  switch (status) {
    case 'Planned':
      return 'Planejamento'

    case 'In Production':
      return 'Produção'

    case 'Canceled':
      return 'Cancelado'

    case 'Released':
      return 'Lançado'

    case 'Post Production':
      return 'Pós Produção'
  }
}

export { formatMovieStatus }
