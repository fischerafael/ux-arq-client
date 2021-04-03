import styled, { css } from 'styled-components'

interface Props {
    disabled?: boolean
}

export const DefaultButton = styled.button<Props>`
    ${({ disabled }) => {
        if (disabled === true) {
            return DisableButton
        }
        return AbleButton
    }}

    color: white;

    height: 2.5rem;
    padding: 0 2rem;
    font-size: 1rem;
`
const AbleButton = css`
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background: white;
    }
`
const DisableButton = css`
    background: lightgrey;
    cursor: not-allowed;

    &:hover {
        color: white;
        background: lightgrey;
    }
`
