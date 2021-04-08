import { useContext } from 'react'
import { GlobalLoaderContext } from '../../usecases/contexts/globalLoaderContext'

import LoadingPage from '../ui/pages/Loading'

const useLoader = () => {
    const { isLoading, setLoading } = useContext(GlobalLoaderContext)

    return {
        isLoading,
        setLoading,
        LoadingPage
    }
}

export default useLoader
