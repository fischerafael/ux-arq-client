import React from 'react'
import useForm from '../../../hooks/useForm'

import DefaultInput from '../../molecules/Inputs/Default'

import { FlexContainer } from '../../molecules/Flex'
import { SubTitle } from '../../molecules/Text'
import { DefaultButton } from '../../molecules/Button'
import CustomLink from '../../molecules/CustomLink'
import { httpClient } from '../../../../services'
import useLoader from '../../../hooks/useLoader'

const Login = () => {
    const { data, handleChange } = useForm({
        email: '',
        password: ''
    })
    const { setLoading } = useLoader()

    async function handleUserLogin(e: any) {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await httpClient.post('/sessions', data)

            console.log(response.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }

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
                onSubmit={handleUserLogin}
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
                    name="email"
                    value={data.email}
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
                >
                    Entrar
                </DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default Login
