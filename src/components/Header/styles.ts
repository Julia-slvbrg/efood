import styled from 'styled-components'
import { colors, ContainerWrapper } from '../../styles'
import { Props } from '.'

export const Container = styled(ContainerWrapper)<Props>`
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 64px;
  flex-direction: ${(props) => (props.$layout === 'restaurant' ? 'row' : null)};
  justify-content: ${(props) =>
    props.$layout === 'restaurant' ? 'space-evenly' : null};
  padding-bottom: ${(props) =>
    props.$layout === 'restaurant' ? '64px' : null};

  p {
    color: ${colors.red};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
  }
`
export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  color: ${colors.red};
  margin: 140px 0 40px 0;
  text-align: center;
  width: 570px;
`
