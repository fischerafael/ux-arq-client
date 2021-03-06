import { FlexContainer } from '../../molecules/Flex'
import { SubTitle } from '../../molecules/Text'
import { DefaultButton } from '../../molecules/Button'

import DefaultInput from '../../molecules/Inputs/Default'
import CustomLink from '../../molecules/CustomLink'

import useAuth from '../../../hooks/useAuth'
import useLoader from '../../../hooks/useLoader'

const Login = () => {
    const { isLoading, LoadingPage } = useLoader()
    const { data, handleLogin, handleChange } = useAuth(defaultData)

    if (isLoading) return <LoadingPage />

    return (
        <FlexContainer
            as="main"
            style={{
                minHeight: '100vh',
                padding: '1rem'
            }}
        >
            <FlexContainer
                as="form"
                style={{
                    flexDirection: 'column',
                    maxWidth: '480px',
                    padding: '2rem',
                    background: 'white'
                }}
            >
                <CustomLink href="/">
                    <img src="/ui/logo-header-nav.svg" alt="Ux.Arq" />
                </CustomLink>

                <SubTitle
                    style={{
                        width: '100%',
                        textAlign: 'start',
                        marginTop: '1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Entrar
                </SubTitle>

                <DefaultInput
                    type="email"
                    label="Email"
                    name="identifier"
                    value={data.identifier}
                    onChange={handleChange}
                />

                <DefaultInput
                    type="password"
                    label="Senha"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />

                <DefaultButton
                    type="submit"
                    style={{ marginTop: '3rem', alignSelf: 'flex-end' }}
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}
                >
                    Entrar
                </DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default Login

const defaultData = {
    identifier: '',
    password: ''
}
