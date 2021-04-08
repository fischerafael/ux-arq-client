import { DefaultButton } from '../../molecules/Button'
import { FlexContainer } from '../../molecules/Flex'

import CustomLink from '../../molecules/CustomLink'
import useAuth from '../../../hooks/useAuth'
import { Text } from '../../molecules/Text'

const NavBar = () => {
    const { credentials, handleLogout } = useAuth()

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

                {credentials?.jwt ? (
                    <DefaultButton onClick={handleLogout}>Sair</DefaultButton>
                ) : (
                    <CustomLink href="/login">
                        <DefaultButton onClick={handleLogout}>
                            Entrar
                        </DefaultButton>
                    </CustomLink>
                )}
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavBar
