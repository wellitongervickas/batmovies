import styled from 'vue-styled-components'

export const container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const containerButton = styled.div`
  margin-top: 2rem;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    flex-direction: column;
  }

  & > div:first-child {
    margin-right: 1rem;

    @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`
