import styled from 'vue-styled-components'

export const moviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.6rem;
  margin-bottom: 2rem;
  cursor: pointer;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPointMobile}) {
    grid-template-columns: 1fr;
    max-width: 225px;
    text-align: center;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakPointMobile}) and (max-width: ${({ theme }) =>
      theme.breakpointTablet}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 620px;
  }
`

export const movieContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.black};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.black};
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.6s;

  &:hover {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0.6rem ${({ theme }) => theme.primary};
  }

  img {
    transform: scale(1.1);
    object-fit: cover;
  }
`

export const movieDetails = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.6rem;
  border-radius: 0.6rem;

  font-size: ${({ theme }) => theme.fontSmall};

  color: ${({ theme }) => theme.secondary};
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`
