import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html {
        font: 400 16px;
        font-size: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: inherit;
        cursor: pointer;
        transition: 0.5s;
        font-weight: bold;
        letter-spacing: 0.05rem;
        border-radius: 0.25rem;
        border: none;
        outline: none;
    }

    @media(max-width: 1024px) {
        html {
            font-size: 95%;
        }        
    }

    @media(max-width: 800px) {
        html {
            font-size: 90%;
        }        
    }

    @media(max-width: 800px) {
        html {
            font-size: 85%;
        }        
    }

    @media(max-width: 480px) {
        html {
            font-size: 75%;
        }        
    }
`
