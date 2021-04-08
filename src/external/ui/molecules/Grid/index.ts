import styled from 'styled-components'

export const GridContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1024px;
    width: 100%;
    padding: 1rem;
`
