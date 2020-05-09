import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles, { theme } from './components/styles/GlobalStyles'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <h2>Hey!!</h2>
  </ThemeProvider>
)
