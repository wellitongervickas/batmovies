import styled from 'vue-styled-components'

export const badgeContainer = styled.span`
  background-color: ${({ theme }) => theme.purple};
  padding: 0 0.6rem;
  border-radius: 0.6rem;
  line-height: ${({ theme }) => theme.lineHeight};

  margin-right: 0.6rem;

  display: inline-block;

  &:last-of-type {
    margin-right: 0;
  }
`
