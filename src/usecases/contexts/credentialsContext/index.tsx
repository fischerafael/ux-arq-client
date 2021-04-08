import { createContext, useState } from 'react'

interface Props {
    credentials: {
        jwt: string
        user: {
            appRole: string
            id: string
            premium: boolean
            username: string
        }
    }
    setCredentials(e: any): void
}

const CredentialsContext = createContext({} as Props)

const CredentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({
        jwt: '',
        user: {
            appRole: '',
            id: '',
            premium: false,
            username: ''
        }
    })

    const value = { credentials, setCredentials }

    return (
        <CredentialsContext.Provider value={value}>
            {children}
        </CredentialsContext.Provider>
    )
}

export { CredentialsContext, CredentialsProvider }
