import styled from 'styled-components'
import { colors } from '../../styles'

export const BtnContainer = styled.button`
  background-color: ${colors.bege};
  color: ${colors.red};
  border: none;
  width: 240px;
  height: 24px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  padding: 4px 8px;
  cursor: pointer;

  &:active {
    text-decoration: underline;
  }
`
