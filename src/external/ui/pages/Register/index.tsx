import { FlexContainer } from '../../molecules/Flex'
import { SubTitle } from '../../molecules/Text'
import { DefaultButton } from '../../molecules/Button'

import CustomLink from '../../molecules/CustomLink'
import DefaultInput from '../../molecules/Inputs/Default'
import InputList from '../../molecules/Inputs/List'

import useAuth from '../../../hooks/useAuth'
import useLoader from '../../../hooks/useLoader'

const Register = () => {
    const { isLoading, LoadingPage } = useLoader()
    const { data, handleChange, handleCreateUser } = useAuth(defaultData)

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
                    Conta
                </SubTitle>

                <DefaultInput
                    type="text"
                    label="Usuário"
                    error="Falta"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                />
                <DefaultInput
                    type="email"
                    label="Email"
                    error="Falta"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
                <DefaultInput
                    type="password"
                    label="Senha"
                    error="Falta"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />

                <SubTitle
                    style={{
                        width: '100%',
                        textAlign: 'start',
                        marginTop: '1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Perfil
                </SubTitle>

                <FlexContainer
                    as="fieldset"
                    style={{
                        border: 'none',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <DefaultInput
                        type="number"
                        label="Ano de Nascimento"
                        error="Falta"
                        name="birth"
                        value={data.birth}
                        onChange={handleChange}
                    />
                    <InputList
                        options={[
                            { value: 'male', label: 'Masculino' },
                            { value: 'female', label: 'Feminino' },
                            { value: 'other', label: 'Outro' }
                        ]}
                        label="Gênero"
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                    />
                </FlexContainer>

                <DefaultButton
                    style={{ marginTop: '3rem', alignSelf: 'flex-end' }}
                    onClick={handleCreateUser}
                >
                    Próximo
                </DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default Register

const defaultData = {
    username: '',
    email: '',
    password: '',
    birth: new Date().getFullYear(),
    gender: '',
    secretKey: '',
    role: 'admin'
}
