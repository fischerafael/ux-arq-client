import React from 'react'
import { DefaultButton } from '../../molecules/Button'
import { FlexContainer } from '../../molecules/Flex'

const NavBar = () => {
    return (
        <FlexContainer as="header" style={{ height: '15vh' }}>
            <FlexContainer
                as="nav"
                style={{
                    maxWidth: '1024px',
                    justifyContent: 'space-between',
                    padding: '0 1rem'
                }}
            >
                <img src="/ui/logo-header-nav.svg" alt="Logo UX.Arq" />
                <DefaultButton>Entrar</DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
