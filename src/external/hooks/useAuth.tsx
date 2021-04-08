import { useRouter } from 'next/router'
import { httpClient } from '../../services'

import useForm from './useForm'
import useLoader from './useLoader'
import useCredentials from './useCredentials'

function useAuth<T>(defaultData?: T) {
    const route = useRouter()

    const { data, handleChange, setData } = useForm(defaultData)
    const { setLoading } = useLoader()
    const { credentials, setCredentials } = useCredentials()

    console.log('credentials from useAuth', credentials)

    async function handleLogin() {
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local', {
                ...data
            })
            setCredentials(response.data)
            route.push('/dashboard')
            setLoading(false)
        } catch (e) {
            console.log(e)
            setData(defaultData)
            setLoading(false)
        }
    }

    function handleLogout() {
        setCredentials(undefined)
        route.push('/')
    }

    async function handleCreateUser() {
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local/register', {
                ...data,
                appRole: 'client'
            })
            setCredentials(response.data)
            route.push('/dashboard')
            setLoading(false)
        } catch (e) {
            console.log(e)
            setData(defaultData)
            setLoading(false)
        }
    }

    return {
        data,
        handleChange,
        handleCreateUser,
        handleLogin,
        handleLogout,
        setCredentials,
        credentials
    }
}

export default useAuth
