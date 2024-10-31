import styled from 'styled-components'
import { colors, ContainerWrapper } from '../../styles'
import { Link } from 'react-router-dom'

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
