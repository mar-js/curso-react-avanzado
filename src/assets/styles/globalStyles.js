import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
  }

  ul,
  li,
  h1,
  h2,
  h3,
  p,
  button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0
  }

  body {
    background: #fefefe;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  #root {
    min-height: 100vh;
    padding-bottom: .1rem;
    overflow-x: hidden;
    box-shadow: 0 0 .1rem rgba(0, 0, 0, .5);
  }
`
