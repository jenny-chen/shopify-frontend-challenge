import styled, { css } from 'styled-components'

const Box = styled.div` 
  ${props => props.outside && css`
    padding: 10%;
  `}


  ${props => props.outside && css`
    ${({ theme }) => `${theme.mediaQueries.tablet} {
      padding: 10vh 5% 0 5%;
      width: ${props.width ? props.width : "100%"};
    }`}
  `}

  ${props => props.nominations && css`
    background-color: ${props => props.theme.colors.paleYellow};
   
    ${({ theme }) => `${theme.mediaQueries.tablet} {
      border-left: 3px solid ${props.theme.colors.gray};
      padding-top: 20vh;
    }`}
  `}

  ${props => props.nominated && css`
    background-color: inherit;
    border: 2px solid ${props.theme.colors.gray};
    margin-bottom: 20px;
  `}

  ${props => props.empty && css`
    border-color: ${props.theme.colors.lightGray};
  `}
`

export default Box
