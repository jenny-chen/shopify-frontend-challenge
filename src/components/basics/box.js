import styled, { css } from 'styled-components'
import { Heading } from './index'

const Box = styled.div` 
  ${props => props.outside && css`
    padding: 10%;
    position: fixed;
    width: 80%;

    ${({ theme }) => `${theme.mediaQueries.tablet} {
      padding: 10vh 5% 0 5%;
      position: static;
      width: ${props.width ? props.width : "100%"};
    }`}
  `}

  ${props => props.instructions && css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: white;
    z-index: 1;
    bottom: ${props.hideInstr ? "-100%" : "0"};
    transition: bottom 2s;

    ${Box} {
      margin: auto;
      margin-top: 50%;
      width: 60%;

      ${({ theme }) => `${theme.mediaQueries.tablet} {
        margin-top: 20%;
      }`}
    }

    ${Heading} {
      letter-spacing: 0;
      font-weight: bold;
    }
  `}

  ${props => props.movie && css`
    margin-top: 45px;
    border-bottom: 1px solid ${props.theme.colors.lightGray}
  `}

  ${props => props.nominations && css`
    background-color: ${props => props.theme.colors.paleYellow};
    bottom: ${props.notShowing ? "-520px" : "0"};
    height: 475px;
    transition: bottom 1s;
   
    ${({ theme }) => `${theme.mediaQueries.tablet} {
      border-left: 3px solid ${props.theme.colors.gray};
      padding-top: 20vh;
      bottom: auto;
      height: auto;
    }`}
  `}

  ${props => props.toggleNom && css`
    position: absolute;
    left: 50%;
    top: -30px;
    
    ${({ theme }) => `${theme.mediaQueries.tablet} {
      display: none;
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
