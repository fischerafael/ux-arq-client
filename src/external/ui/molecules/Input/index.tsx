import React from 'react'

import InputLabel from './Label'
import ListInput from './List'

import { FlexContainer } from '../Flex'

interface Props {
    error?: string
    label: string
    type: string
    list?: string[]
}

const Input = ({ error, label, type, list }: Props) => {
    return (
        <FlexContainer
            as="label"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                border: 'solid 0.025rem lightgrey',
                height: '4rem',
                paddingLeft: '0.5rem',
                margin: '0.5rem 0'
            }}
        >
            <InputLabel error={error} label={label} />

            {list && <ListInput list={list} />}
            {!list && (
                <FlexContainer
                    as="input"
                    type={type}
                    style={{
                        background: 'transparent',
                        outline: 'none',
                        border: 'none',
                        fontSize: '1rem',
                        color: '#333',
                        paddingRight: '0.5rem'
                    }}
                />
            )}
        </FlexContainer>
    )
}

export default Input
