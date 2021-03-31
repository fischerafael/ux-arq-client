import React from 'react'
import { DefaultButton } from '../../molecules/Button'
import { FlexContainer } from '../../molecules/Flex'
import { SubTitle, Title } from '../../molecules/Text'

const HeroSection = () => {
    return (
        <FlexContainer as="main" style={{ minHeight: '85vh' }}>
            <FlexContainer
                as="section"
                style={{
                    maxWidth: '1024px',
                    padding: '0 1rem',
                    flexDirection: 'column'
                }}
            >
                <Title style={{ padding: '1rem 0', maxWidth: '800px' }}>
                    Projete Experiências Arquitetônicas
                </Title>
                <SubTitle>Crie atmosferas pensadas nos usuários</SubTitle>
                <DefaultButton style={{ marginTop: '5rem' }}>
                    Cadastre-se
                </DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default HeroSection
