const formatPercent = (average: number) => {
  const intAverage = average * 10
  return intAverage + '%'
}

export { formatPercent }
