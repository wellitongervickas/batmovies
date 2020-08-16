import styled from 'vue-styled-components'

export const container = styled.div`
  display: grid;
  grid-template-columns: 4rem 2fr;
  height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.breakPointMobile}) {
    grid-template-columns: 6rem 2fr;
  }
`

export const content = styled.div`
  color: ${({ theme }) => theme.secondary};
  padding: 2rem;
  overflow-y: auto;
`

export default container
