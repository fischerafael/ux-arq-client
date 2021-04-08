import useAuth from '../../../hooks/useAuth'

import NavBar from '../../templates/NavBar'

const Dashboard = () => {
    const { credentials, setCredentials } = useAuth({})

    console.log('credentials from dashboard', credentials)

    return (
        <>
            <NavBar />

            <button>Logar</button>
            <button>Deslogar</button>
        </>
    )
}

export default Dashboard
