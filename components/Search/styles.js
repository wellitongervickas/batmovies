import styled from 'vue-styled-components'

export const searchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const searchBarButton = styled.div`
  margin-left: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    margin-left: 0;
    margin-top: 1rem;

    flex: 1;

    &,
    button {
      width: 100%;
    }
  }
`
export const searchBarField = styled.div`
  flex: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    flex: 1;
    width: 100%;
  }
`
