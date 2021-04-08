import { useContext } from 'react'
import { CredentialsContext } from '../../usecases/contexts/credentialsContext'

const useCredentials = () => {
    const { credentials, setCredentials } = useContext(CredentialsContext)

    return { credentials, setCredentials }
}

export default useCredentials
