import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { BtnContainer } from '../Button/styles'

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
    height: 88px;
  }

  ${BtnContainer} {
    margin-top: 8px;
    padding: 4px 80px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .row {
      display: grid;
      grid-template-rows: 20px auto;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      width: 600px;

      h4 {
        grid-row: 1;
        grid-column: 2;
        font-size: 18px;
      }

      p {
        grid-column: 2;
        grid-row: 2;
        font-size: 16px;
        margin-bottom: 25px;
      }
      img {
        grid-column: 1;
        grid-row: 2;
        width: 270px;
        height: 140px;
      }
    }
  }
`
