import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'
import { Wrapper, Container, Title } from './styles'
import { Logo } from '../../styles'
import { Link, useLocation } from 'react-router-dom'
import Banner from '../Banner'

export const Header = () => {
  const location = useLocation()

  const chooseHeader = () => {
    if (location.pathname === '/') {
      return (
        <Container style={{ backgroundImage: `url(${background})` }}>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </Container>
      )
    } else {
      return (
        <>
          <Wrapper
            $layout="restaurant"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="container">
              <Container $layout="restaurant">
                <p>Restaurantes</p>
                <Link to="/">
                  <Logo src={logo} alt="efood" />
                </Link>
                <div>
                  <p>0 produtos(s) no carrinho</p>
                </div>
              </Container>
            </div>
          </Wrapper>
          <Banner />
        </>
      )
    }
  }

  return <>{chooseHeader()}</>
}

export default Header
