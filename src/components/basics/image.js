import styled, { css } from 'styled-components'

const Image = styled.img`
  transition: transform 1s;

  ${props => props.rotated && css`
    transform: rotate(180deg);
  `}
`

export default Image
