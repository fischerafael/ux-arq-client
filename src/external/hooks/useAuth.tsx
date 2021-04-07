import { httpClient } from '../../services'

import useForm from './useForm'
import useLoader from './useLoader'

function useAuth<T>(defaultData: T) {
    const { data, handleChange, setData } = useForm(defaultData)

    const { setLoading } = useLoader()

    async function handleCreateUser(e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local/register', {
                ...data,
                appRole: 'client'
            })
            console.log(response)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setData(defaultData)
        }
    }

    async function handleLogin(e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local', {
                ...data
            })
            console.log(response)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setData(defaultData)
        }
    }

    return {
        data,
        handleChange,
        handleCreateUser,
        handleLogin
    }
}

export default useAuth
