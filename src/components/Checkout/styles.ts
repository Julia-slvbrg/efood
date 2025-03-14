import styled from 'styled-components'

import { colors } from '../../styles'
import { BtnContainer } from '../Button/styles'
import { Sidebar } from '../Cart/styles'

type RowProps = {
  $marginTop?: string
  $rowWidth?: string
}

export const SidebarCheckout = styled(Sidebar)`
  padding: 32px 8px;
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  line-height: 100%;
  margin-bottom: 16px;
`
export const Text = styled.div`
  p {
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.$marginTop || '8px'};
  width: ${(props) => props.$rowWidth || '100%'};

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    background-color: ${colors.bege};
    border: transparent;
    padding: 8px;

    &.error {
      border: 2.5px solid red;
    }
  }

  ${BtnContainer} {
    margin: 4px 0;
  }
`
export const Complements = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;

  div {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`
