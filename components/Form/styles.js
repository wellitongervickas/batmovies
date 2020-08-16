import styled from 'vue-styled-components'

export const buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const fields = styled.div`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const fieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.secondary};
    display: block;
    margin-bottom: 0.3rem;

    span {
      color: ${({ theme }) => theme.red};
    }
  }

  input {
    appearance: none;
    min-width: 0;
    max-width: 100%;
    color: ${({ theme }) => theme.secondary};
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.6rem;
    border: 2px solid ${({ theme }) => theme.primary};
    line-height: ${({ theme }) => theme.lineHeight * 2};
    padding: 0 0.6rem;

    transition: 0.5s;
  }

  input:focus {
    box-shadow: 0 0 0.6rem ${({ theme }) => theme.primary};
  }
`

export const buttonContainer = styled.div`
  button,
  a {
    line-height: 1.4rem;
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
    transition: 0.5s;
  }

  button:hover,
  button:focus,
  a:hover,
  a:active {
    box-shadow: 0 0 1rem ${({ theme }) => theme.primary};
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }
`
