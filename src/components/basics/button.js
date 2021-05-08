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

  border: none;
  border-radius: 5px;
  color: white;
  float: right;
  margin-top: 8px;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    filter: brightness(0.9);
  }
`

export default Button
