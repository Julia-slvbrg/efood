import styled from 'styled-components'
import { colors } from '../../styles'
import { BtnContainer } from '../Button/styles'

export const Container = styled.div`
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.bege};

  img {
    height: 167px;
    width: 304px;
  }

  h4 {
    font-size: 16px;
    line-height: 19px;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    height: 88px;
  }

  ${BtnContainer} {
    margin-top: 8px;
    padding: 4px 80px;
    width: 100%;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;

  &.visible {
    display: flex;
  }
`
