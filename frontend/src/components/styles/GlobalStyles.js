import { createGlobalStyle } from 'styled-components'

export const theme = {
  primary: '#746fa3',
  light: '#ffffff',
  black: '#262626',
  dark: '#000000',
  lightGrey: '#d8d8d8',
  imGoingToFaint: '#fbfbfb',
  maxWidth: '1200px',
}

const GlobalStyles = createGlobalStyle`
  html {
      font-family: 'Roboto';
      font-weight: normal;
      font-style: normal;
      box-sizing: border-box;
      font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
  }
  h1,h2,h3,p {
    color: ${({ theme }) => theme.black};
    margin: 0;
    line-height: 1.4;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};;
    margin: 0;
  }
`
export default GlobalStyles
