const formatToUsDolar = (money: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(money)

export { formatToUsDolar }
