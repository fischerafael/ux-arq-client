import React from 'react'
import { FlexContainer } from '../../Flex'

interface Props {
    options: { value: string; label: string }[]
}

const ListInput = ({ options, value }: Props) => {
    return (
        <>
            <FlexContainer
                as="input"
                list="gender"
                style={{
                    background: 'transparent',
                    outline: 'none',
                    border: 'none',
                    fontSize: '1rem',
                    color: '#333',
                    paddingRight: '0.5rem'
                }}
                placeholder="selecione"
            />
            <datalist id="gender">
                <option value="" disabled hidden>
                    Selecione
                </option>
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </datalist>
        </>
    )
}

export default ListInput
