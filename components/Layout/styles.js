import styled from 'vue-styled-components'

import background from '../../assets/home-bg.jpg'

export const container = styled.div`
  ${(props) =>
    props.value.useBackground &&
    `
        background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
      background-image: url(${background});
    `}

  background-color: ${({ theme }) => theme.dark};
  display: flex;
  height: 100vh;
`
