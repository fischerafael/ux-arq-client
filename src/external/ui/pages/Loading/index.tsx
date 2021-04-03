import React from 'react'
import { FlexContainer } from '../../molecules/Flex'
import Spinner from '../../molecules/Spinner'
import { SubTitle } from '../../molecules/Text'

const LoadingPage = () => {
    return (
        <FlexContainer style={{ height: '100vh', flexDirection: 'column' }}>
            <Spinner />
            <SubTitle style={{ marginTop: '1rem', fontSize: '1rem' }}>
                Carregando...
            </SubTitle>
        </FlexContainer>
    )
}

export default LoadingPage
