import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Logo = styled.img`
  margin-top: 64px;
  width: 128px;
  height: 56px;
`
export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  color: ${colors.red};
  margin: 140px 0 40px 0;
  text-align: center;
  width: 570px;
`
