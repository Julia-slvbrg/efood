import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.bege2};
  font-size: ${(props) => (props.$position === 'top' ? '12px' : '14px')};
  font-weight: 700;
  display: inline-block;
  padding: ${(props) => (props.$position === 'top' ? '6px 4px' : '4px 6px')};
`
