import GlobalStyles from '@/styles/global'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
