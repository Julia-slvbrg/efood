import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tags/styles'

export const CardWrapper = styled.div`
  position: relative;
  width: 472px;
  display: flex;
  flex-direction: column;

  > img {
    height: 217px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Container = styled.div`
  background-color: ${colors.white};
  color: ${colors.red};
  border: solid 1px ${colors.red};
  border-top: none;
  padding: 8px;

`
export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
export const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`
export const Name = styled.h3`
  display: inline-block;
`
export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  font-weight: 400;
  height: 88px;
`
