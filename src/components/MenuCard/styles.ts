import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.bege};

  img {
    height: 167px;
    width: 304px;
  }

  h4 {
    font-size: 16px;
    line-height: 19px;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    margin-top: 8px;
    width: 100%;
    height: 24px;
    background-color: ${colors.bege};
    color: ${colors.red};
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    font-weight: 700;
    padding: 4px 80px;
    border: none;
    cursor: pointer;

    &:active {
      text-decoration: underline;
    }
  }
`
