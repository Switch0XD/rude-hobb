import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles, { theme } from './components/styles/GlobalStyles'
import Main from './components/Main';
import Nav from './components/Nav';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Main />
    <Nav />
  </ThemeProvider>
)
