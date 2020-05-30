import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: sans-serif;
    font-size: 125%;
    height: 100%;
  }

  body {
    background-color: #42aaf4;
    font-size: 0.8rem;
    height: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`
