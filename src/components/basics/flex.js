import styled, { css } from 'styled-components'
import { Box } from './index'

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  ${({ theme }) => `${theme.mediaQueries.tablet} {
    flex-direction: row;
  }`}

  ${props => props.boxWidth && css`
    ${Box} {
      width: 100%;
      ${({ theme }) => `${theme.mediaQueries.tablet} {
        width: ${props.boxWidth};
      }`}
    }
  `}
`

export default Flex
