import styled from 'vue-styled-components'

export const movieContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    flex-direction: column;
  }
`

export const movieThumbContainer = styled.div`
  text-align: center;

  img {
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0.6rem ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.black};
    object-fit: cover;
  }
`

export const movieContent = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    margin-left: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    margin-top: 2rem;
  }
`
