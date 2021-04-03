import { useContext } from 'react'
import { GlobalLoaderContext } from '../../usecases/contexts/globalLoaderContext'

const useLoader = () => {
    const { isLoading, setLoading } = useContext(GlobalLoaderContext)

    return {
        isLoading,
        setLoading
    }
}

export default useLoader
