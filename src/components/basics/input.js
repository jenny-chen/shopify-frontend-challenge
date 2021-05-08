import styled from 'styled-components'

const Input = styled.input`
  line-height: 2em;  
  width: 100%;
  border: none;
  background-color: inherit;
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts};
  font-size: 2em;
  border-bottom: 5px solid ${props => props.theme.colors.lightGray};
  margin-bottom: 40px;
  transition: color 0.5s, border-color 0.5s;

  &::placeholder {
    color: ${props => props.theme.colors.lightGray}
  }

  &:focus {
    border-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.gray};
    outline-width: 0;
  }

  ${({ theme }) => `${theme.mediaQueries.tablet} {
    font-size: 3em;
  }`}
`

export default Input
