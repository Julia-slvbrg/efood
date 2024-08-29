import styled from 'styled-components'
import { colors, ContainerWrapper } from '../../styles'

export const Container = styled(ContainerWrapper)`
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 64px;
`
export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  color: ${colors.red};
  margin: 140px 0 40px 0;
  text-align: center;
  width: 570px;
`
