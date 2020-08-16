import styled from 'vue-styled-components'

import background from '../../assets/home-bg.jpg'

const contentProps = {
  breakpoint: [Number, String],
}

const containerProps = {
  usebackground: Boolean,
}

export const container = styled('div', containerProps)`
  ${(props) =>
    props.usebackground &&
    `
      background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
      background-image: url(${background});
    `}

  background-color: ${({ theme }) => theme.dark};
  height: 100vh;
`

export const content = styled('div', contentProps)`
  margin: 0 auto;
  max-width: ${(props) => props.breakpoint};
`
