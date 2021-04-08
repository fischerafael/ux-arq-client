import { useRouter } from 'next/router'
import { useState } from 'react'

import { httpClient } from '../../services'

import useForm from './useForm'
import useLoader from './useLoader'

function useAuth<T>(defaultData: T) {
    const route = useRouter()

    const { data, handleChange, setData } = useForm(defaultData)
    const { setLoading } = useLoader()

    const [credentials, setCredentials] = useState({})

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
            setLoading(false)
            setData(defaultData)
        }
    }

    async function handleLogin() {
        setLoading(true)
        try {
            const response = await httpClient.post('/auth/local', {
                ...data
            })
            console.log(response.data)
            setCredentials(response.data)
            route.push('/dashboard')
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
        handleLogin,
        setCredentials,
        credentials
    }
}

export default useAuth
