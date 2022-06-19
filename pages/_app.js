import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CookiesProvider } from 'react-cookie';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <>
    <CookiesProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CookiesProvider>
    </>
  )
}


export default App;