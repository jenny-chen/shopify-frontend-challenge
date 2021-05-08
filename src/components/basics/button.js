import styled, { css } from 'styled-components'

const Button = styled.button`
  ${props => {
    switch (props.color) {
      case "gold":
        return `background-color: ${props.theme.colors.gold};`
      case "darkGreen":
        return `background-color: ${props.theme.colors.darkGreen};`
      case "red":
        return `background-color: ${props.theme.colors.red};`
      case "paleYellow":
        return `background-color: ${props.theme.colors.paleYellow};`
      default:
        return `background-color: ${props.theme.colors.gray};`
    }
  }};

  border: none;
  border-radius: 5px;
  color: white;
  float: right;
  font-family: ${props => props.theme.fonts};
  font-size: 0.8em;
  padding: 5px 10px;

  ${({ theme }) => `${theme.mediaQueries.tablet} {
    font-size: 1em;
    margin-top: 4px;
    padding: 8px 15px;
  }`}

  ${props => props.toggleNom && css`
    border-radius: 50px;
    float: none;
    left: -50%;
    position: relative;
  `}

  &:hover {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  &:active {
    filter: brightness(0.9);
  }
`

export default Button
