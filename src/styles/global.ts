import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #116193;
    --secondary: #1cd0d0;
    --background: #FFFFFF;
    --text: #787878;
    --dark: #121212;
    --bright: #EBEBEB;
    --darken: #e0e0e0;
    --danger: #ee0e0e;
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

  a {
    text-decoration: none;
    color: inherit;
  }

  a, button {
    cursor: pointer;
  }
`
