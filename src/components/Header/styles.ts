import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, colors, ContainerWrapper } from '../../styles'

export const Wrapper = styled(ContainerWrapper)<{ $layout?: string }>`
  background-repeat: no-repeat;
  background-size: cover;
`
export const Container = styled(ContainerWrapper)<{ $layout?: string }>`
  flex-direction: ${(props) => (props.$layout === 'restaurant' ? 'row' : null)};
  justify-content: ${(props) =>
    props.$layout === 'restaurant' ? 'space-between' : null};
  padding-top: 64px;
  padding-bottom: ${(props) =>
    props.$layout === 'restaurant' ? '64px ' : null};
  text-decoration: none;

  p {
    color: ${colors.red};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:active {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-left: 35px;

    p {
      display: grid;
    }
  }
`
export const LinkText = styled(Link)`
  color: ${colors.red};
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
`
export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  color: ${colors.red};
  margin: 140px 0 40px 0;
  text-align: center;
  width: 570px;
`
