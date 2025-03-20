import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { BtnContainer } from '../Button/styles'

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  line-height: 22px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  padding: 8px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`
export const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 1000px;
  cursor: pointer;
`
export const Info = styled.div`
  display: flex;
`
export const Picture = styled.img`
  width: 280px;
  height: 280px;
  margin: 8px 24px 32px 32px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 200px;
    height: 200px;
    margin-left: 8px;
  }
`
export const TextWrapper = styled.div`
  width: 656px;
  padding-top: 8px;

  div {
    height: 176px;

    :last-child {
      margin-top: 32px;
    }
  }

  ${BtnContainer} {
    margin: 16px 0 56px 0;

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 20px;
    }
  }
`
