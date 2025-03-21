import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  font-size: 32px;
  line-height: 38px;
  padding: 24px 176px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 180px;
  }
`
export const Info = styled.h3<{ type?: string }>`
  font-weight: ${(props) => (props.type === 'food' ? '100' : '900')};
  margin-bottom: ${(props) => (props.type === 'food' ? '157px' : '32px')};
  z-index: 2;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: ${(props) => (props.type === 'food' ? '80px' : '15px')};
    position: absolute;
    margin-top: ${(props) => (props.type === 'food' ? '140px' : '200px')};
  }
`
