import React from 'react'

import { FlexContainer } from '../../Flex'
import { Paragraph } from '../../Text'

interface Props {
    label: string
    options: { value: string; label: string }[]
    error?: string
    value: string
    onChange(e: any): void
}

const InputList = ({ label, options, error, value, onChange }: Props) => {
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
                as="select"
                value={value}
                onChange={onChange}
                id={label}
                style={{
                    height: '3rem',
                    outline: 'none',
                    border: 'solid 0.05rem lightgrey',
                    padding: '0 1rem'
                }}
            >
                <option value="" disabled hidden>
                    Selecione
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </FlexContainer>
        </FlexContainer>
    )
}

export default InputList
