import { createContext, useState } from 'react'
// import LoadingPage from '../../../external/ui/pages/Loading'

interface IGlobalLoaderContext {
    isLoading: boolean
    setLoading(e: boolean): void
}

export const GlobalLoaderContext = createContext({} as IGlobalLoaderContext)

export const GlobalLoaderProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false)

    const value = {
        isLoading,
        setLoading
    }

    // if (isLoading) return <LoadingPage />

    return (
        <GlobalLoaderContext.Provider value={value}>
            {children}
        </GlobalLoaderContext.Provider>
    )
}
