import React from 'react'

import { FlexContainer } from '../../Flex'
import { Paragraph } from '../../Text'

interface Props {
    label: string
    type: 'text' | 'number' | 'password' | 'email'
    error?: string
}

const DefaultInput = ({ label, error, type }: Props) => {
    return (
        <FlexContainer
            as="div"
            style={{
                alignItems: 'flex-start',
                flexDirection: 'column'
            }}
        >
            <FlexContainer
                as="label"
                htmlFor={label}
                style={{ justifyContent: 'space-between' }}
            >
                <Paragraph style={{ fontSize: '0.75rem' }}>{label}</Paragraph>
                {error && (
                    <Paragraph style={{ fontSize: '0.75rem', color: 'red' }}>
                        {error}
                    </Paragraph>
                )}
            </FlexContainer>

            <FlexContainer
                as="input"
                id={label}
                type={type}
                style={{
                    height: '3rem',
                    outline: 'none',
                    border: 'solid 0.05rem lightgrey',
                    padding: '0 1rem'
                }}
            />
        </FlexContainer>
    )
}

export default DefaultInput
