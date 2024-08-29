import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  bege: '#FFEBD9',
  white: '#FFFFFF',
  bege2: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.bege2};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Logo = styled.img`
  width: 128px;
  height: 56px;
`
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
