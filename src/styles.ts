import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  bege: '#FFEBD9',
  white: '#FFFFFF',
  bege2: '#FFF8F2'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
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
export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 56px 0 120px 0;
  gap: 32px;
`
