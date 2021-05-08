import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts};
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle
