import styled from 'styled-components'

const Input = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 5px solid ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.lightGray};
  line-height: 2em;  
  font-family: ${props => props.theme.fonts};
  font-size: 2em;
  margin-bottom: 40px;
  transition: color 0.5s, border-color 0.5s;
  width: 100%;

  ${({ theme }) => `${theme.mediaQueries.tablet} {
    font-size: 3em;
  }`}

  &:focus {
    border-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.gray};
    outline-width: 0;
  }

  &::placeholder {
    color: ${props => props.theme.colors.lightGray}
  }
`

export default Input
