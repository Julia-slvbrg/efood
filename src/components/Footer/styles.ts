import styled from 'styled-components'
import { colors, ContainerWrapper } from '../../styles'

export const Wrapper = styled(ContainerWrapper)`
  background-color: ${colors.bege};
  padding-top: 40px;

  p {
    color: ${colors.red};
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 40px;
    width: 480px;
  }
`
export const Socials = styled.ul`
  margin: 32px 0 80px 0;

  li {
    display: inline-block;
  }
  :nth-child(2) {
    margin: 0 8px;
  }
`
