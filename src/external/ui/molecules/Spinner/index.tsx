import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 0.1rem solid ${({ theme }) => theme.colors.primary};
    border-right: 0.1rem solid ${({ theme }) => theme.colors.primary};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primary};
    border-left: 0.5rem solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`

export default Spinner
