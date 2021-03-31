import styled from 'styled-components'

export const DefaultButton = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    color: white;

    height: 2.5rem;
    padding: 0 2rem;
    font-size: 1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background: white;
    }
`
