import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../styles/theme'
import { GlobalLoaderProvider } from '../usecases/contexts/globalLoaderContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <GlobalLoaderProvider>
                    <Component {...pageProps} />
                </GlobalLoaderProvider>
            </ThemeProvider>
        </>
    )
}
