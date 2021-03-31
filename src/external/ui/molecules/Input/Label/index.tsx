import React from 'react'
import { FlexContainer } from '../../Flex'
import { Paragraph } from '../../Text'

interface Props {
    label: string
    error?: string
}

const InputLabel = ({ label, error }: Props) => {
    return (
        <FlexContainer
            as="section"
            style={{
                justifyContent: 'space-between'
            }}
        >
            <Paragraph
                as="span"
                style={{
                    fontSize: '0.7rem',
                    color: 'lightgrey',
                    textAlign: 'start'
                }}
            >
                {label}
            </Paragraph>

            {error && (
                <Paragraph
                    as="span"
                    style={{
                        fontSize: '0.7rem',
                        color: 'red',
                        textAlign: 'end',
                        margin: '0 0.5rem'
                    }}
                >
                    {error}
                </Paragraph>
            )}
        </FlexContainer>
    )
}

export default InputLabel
