import React from 'react'

import { FlexContainer } from '../../molecules/Flex'
import { SubTitle } from '../../molecules/Text'

import { DefaultButton } from '../../molecules/Button'
import CustomLink from '../../molecules/CustomLink'

import DefaultInput from '../../molecules/Inputs/Default'
import InputList from '../../molecules/Inputs/List'

const Register = () => {
    const [gender, setGender] = React.useState('')
    console.log(gender)

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
                        textAlign: 'center',
                        marginTop: '1rem'
                    }}
                >
                    Cadastro
                </SubTitle>

                <DefaultInput type="text" label="Usuário" error="Falta" />
                <DefaultInput type="email" label="Email" error="Falta" />
                <DefaultInput type="password" label="Senha" error="Falta" />

                <SubTitle
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '1rem'
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
                    />
                    <InputList
                        options={[
                            { value: 'masculino', label: 'Masculino' },
                            { value: 'feminino', label: 'Feminino' },
                            { value: 'outro', label: 'Outro' }
                        ]}
                        label="Gênero"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </FlexContainer>

                <DefaultButton
                    style={{ marginTop: '3rem', alignSelf: 'flex-end' }}
                >
                    Próximo
                </DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default Register
