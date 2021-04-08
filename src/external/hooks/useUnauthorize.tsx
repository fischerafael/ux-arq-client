import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useCredentials from './useCredentials'

const useUnauthorize = () => {
    const route = useRouter()
    const { credentials } = useCredentials()

    useEffect(() => {
        if (!credentials?.jwt) route.push('/')
    }, [credentials])
}

export default useUnauthorize
