import styled from 'vue-styled-components'

export const container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontBigger};
    padding: 0.6rem;
    min-height: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.breakPointMobile}) {
      min-height: 3rem;
      font-size: ${({ theme }) => theme.fontBiggest};
    }
  }
`
export const content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const sidebarLogo = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`
