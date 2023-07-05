import GlobalStyle from '../src/theme/GlobalStyle';

export function MyApp({ Component, pageProps }) {
    return (
      <>
      <GlobalStyle />
    <Component {...pageProps} />
    </>
    )
  }

  export default MyApp;