import styled from 'vue-styled-components'

export const container = styled.div`
  user-select: none;
  text-align: center;
  animation: 1s appear;
  margin: auto;
  position: relative;
  font-size: ${({ theme }) => theme.fontSuperBigger};
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  color: ${({ theme }) => theme.primary};

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    font-size: ${({ theme }) => theme.fontSuperBig};
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
`
export const icon = styled.div``

export const mainIcon = styled.div`
  position: absolute;
  top: -35px;
  left: 25px;

  @media screen and (min-width: ${({ theme }) => theme.breakPointMobile}) {
    top: -45px;
    left: 15px;
  }
`

export const firstName = styled.strong``
export const lastName = styled.span``

export const description = styled.span`
  display: block;
  color: ${({ theme }) => theme.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  margin: 0;
`
