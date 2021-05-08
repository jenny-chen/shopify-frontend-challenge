import styled from 'styled-components'

const Button = styled.button`
  ${props => {
    switch (props.color) {
      case "gold":
        return `background-color: ${props.theme.colors.gold};`
      case "darkGreen":
        return `background-color: ${props.theme.colors.darkGreen};`
      case "red":
        return `background-color: ${props.theme.colors.red};`
      default:
        return `background-color: ${props.theme.colors.gray};`
    }
  }};

  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  float: right;
  margin-top: 8px;

  &:hover {
    cursor: pointer;
  }
`

export default Button
