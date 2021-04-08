import React from 'react'
import { DefaultButton } from '../../../molecules/Button'
import { FlexContainer } from '../../../molecules/Flex'
import { Text } from '../../../molecules/Text'

const PublicReferenceCard = ({ img, name }) => {
    return (
        <FlexContainer
            as="article"
            style={{
                flexDirection: 'column',
                borderRadius: '1rem 1rem 0 0',
                alignItems: 'start'
            }}
        >
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '30vh',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    overflow: 'hidden'
                }}
                src={img}
                alt={name}
            />
            <FlexContainer
                as="header"
                style={{
                    justifyContent: 'space-between',
                    height: '5rem'
                }}
            >
                <Text
                    as="h2"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.25rem',
                        textAlign: 'start',
                        lineHeight: '2rem'
                    }}
                >
                    {name}
                </Text>
                <DefaultButton>Avaliar</DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}

export default PublicReferenceCard
