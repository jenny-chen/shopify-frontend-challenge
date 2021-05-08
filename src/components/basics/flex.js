import styled, { css } from 'styled-components'
import { Box } from './index'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100%;

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
