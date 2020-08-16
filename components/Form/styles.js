import styled from 'vue-styled-components'

export const buttonContainer = styled.div`
  button,
  a {
    font-size: ${({ theme }) => theme.fontSize};
    color: ${({ theme }) => theme.secondary};
    text-align: center;
    display: block;
    cursor: pointer;

    padding: 0.6rem 2rem;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.bold};
    box-shadow: 0 0 0.6rem ${({ theme }) => theme.primary};
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }
`
