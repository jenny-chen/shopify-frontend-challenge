import styled, { css } from 'styled-components'

const Text = styled.p`
  ${props => {
    switch (props.color) {
      case "red":
        return `color: ${props.theme.colors.red};`
      case "green":
        return `color: ${props.theme.colors.green};`
      default:
        return `color: ${props.theme.colors.black};`
    }
  }};
  
  font-size: 0.9em;

  ${({ theme }) => `${theme.mediaQueries.tablet} {
    font-size: 1em;
  }`}

  ${props => props.nominated && css`
    position: relative;
    text-decoration: none;
    display: inline-block;

    &:after {
      background-color: black;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      margin: auto 0;
      position: absolute;
      top: 0;
      transition: width 1s;
      width: 0;
    }

    &:hover {
      cursor: pointer;
      &:after{
        width: 100%;
      }
  `}

  ${props => props.title && css`
    font-size: 1.2em;
    margin: 0;
    width: 80%;

    ${({ theme }) => `${theme.mediaQueries.tablet} {
      font-size: 2em;
    }`}
  `}
`

export default Text
