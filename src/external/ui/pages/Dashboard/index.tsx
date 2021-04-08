import { useRouter } from 'next/router'
import useAuth from '../../../hooks/useAuth'
import useUnauthorize from '../../../hooks/useUnauthorize'

import NavBar from '../../templates/NavBar'

const Dashboard = () => {
    useUnauthorize()
    const { credentials } = useAuth()

    return (
        <>
            <NavBar />

            <button>Logar</button>
            <button>Deslogar</button>
        </>
    )
}

export default Dashboard
