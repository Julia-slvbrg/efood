import styled from 'styled-components'
import { colors } from '../../styles'
import { BtnContainer } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.8;
`
export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 2;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  color: ${colors.bege};

  ${BtnContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const CartItem = styled.li`
  display: flex;
  color: ${colors.red};
  background-color: ${colors.bege};
  padding: 8px 8px 12px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    border: none;
    background-color: ${colors.bege};
    position: absolute;
    right: 0;
    top: 76px;
    cursor: pointer;
    img {
      width: 16px;
      height: 16px;
    }
  }
`
export const Price = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
`
