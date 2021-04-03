import React from 'react'
import { DefaultButton } from '../../molecules/Button'
import CustomLink from '../../molecules/CustomLink'
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
                <CustomLink href="/">
                    <img src="/ui/logo-header-nav.svg" alt="Logo UX.Arq" />
                </CustomLink>

                <CustomLink href="/login">
                    <DefaultButton>Entrar</DefaultButton>
                </CustomLink>
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
