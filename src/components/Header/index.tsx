import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'
import { Container, LinkText, Title, Wrapper } from './styles'
import { Logo } from '../../styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
                <LinkText to="/">
                  <p>Restaurantes</p>
                </LinkText>
                <Link to="/">
                  <Logo src={logo} alt="efood" />
                </Link>
                <button onClick={openCart}>
                  <p>{items.length} produtos(s) no carrinho</p>
                </button>
              </Container>
            </div>
          </Wrapper>
        </>
      )
    }
  }

  return <>{chooseHeader()}</>
}

export default Header
