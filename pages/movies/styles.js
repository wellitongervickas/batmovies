import styled from 'vue-styled-components'

export const movieBadges = styled.div`
  margin-top: 1rem;
`

export const movieContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    flex-direction: column;
  }
`

export const movieThumbContainer = styled.div`
  text-align: center;

  img {
    min-width: 300px;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0.6rem ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.black};
    object-fit: cover;

    @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
      min-width: 100%;
    }
  }
`

export const movieContent = styled.div`
  p {
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    margin-left: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    margin-top: 2rem;
  }
`
export const movieFavorite = styled.div`
  margin-bottom: 2rem;

  & > svg {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.purple};
    }
  }

  & > :nth-child(1) {
    margin-right: 1rem;
  }
`
