import styled from 'vue-styled-components'

export const container = styled.div`
  background-color: ${({ theme }) => theme.black};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const content = styled.div`
  display: flex;
`

export const logout = styled.div`
  padding: 0.6rem;
  font-size: ${({ theme }) => theme.fontBigger};
  min-height: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakPointMobile}) {
    min-height: 3rem;
    font-size: ${({ theme }) => theme.fontBiggest};
  }

  &,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
