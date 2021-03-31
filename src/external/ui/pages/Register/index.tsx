import React from 'react'

import Input from '../../molecules/Input'

import { FlexContainer } from '../../molecules/Flex'
import { SubTitle } from '../../molecules/Text'
import { TwoColumnGrid } from '../../molecules/Grid'
import { DefaultButton } from '../../molecules/Button'
import CustomLink from '../../molecules/CustomLink'

const Register = () => {
    return (
        <FlexContainer
            as="main"
            style={{
                minHeight: '100vh',
                padding: '1rem'
            }}
        >
            <FlexContainer
                as="section"
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
                        marginTop: '1rem'
                    }}
                >
                    Conta
                </SubTitle>
                <Input
                    label="usuário"
                    error={'Campo Obrigatório'}
                    type="text"
                />
                <Input label="email" error={'Campo Obrigatório'} type="text" />
                <Input
                    label="senha"
                    error={'Campo Obrigatório'}
                    type="password"
                />

                <SubTitle
                    style={{
                        width: '100%',
                        textAlign: 'start',
                        marginTop: '1rem'
                    }}
                >
                    Dados Pessoais
                </SubTitle>

                <TwoColumnGrid as="section">
                    <Input
                        label="ano nascimento"
                        error={'Preencha'}
                        type="number"
                    />
                    <Input
                        label="genêro"
                        error={'Selecione'}
                        type="text"
                        list={['masculino', 'feminino', 'outro']}
                    />
                </TwoColumnGrid>

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
