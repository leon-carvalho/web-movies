import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #116193;
    --secondary: #04BFCB;
    --background: #FFFFFF;
    --text: #787878;
    --bright: #EBEBEB;
  }

  body {
    color: var(--text);
    background: var(--background);
  }

  body, input, button, textarea {
    font-weight: 300;
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    font-family: 'Abel', sans-serif;
  }
`
