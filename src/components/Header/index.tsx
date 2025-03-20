import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'

import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Logo } from '../../styles'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCartSide = () => {
    dispatch(openCart())
  }

  const chooseHeader = () => {
    if (location.pathname === '/') {
      return (
        <S.Container style={{ backgroundImage: `url(${background})` }}>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </S.Container>
      )
    } else {
      return (
        <>
          <S.Wrapper
            $layout="restaurant"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="container">
              <S.Container $layout="restaurant">
                <S.LinkText to="/">
                  <p>Restaurantes</p>
                </S.LinkText>
                <Link to="/">
                  <Logo src={logo} alt="efood" />
                </Link>
                <button onClick={openCartSide}>
                  <p>
                    {items.length} produtos(s) no <span>carrinho</span>{' '}
                  </p>
                </button>
              </S.Container>
            </div>
          </S.Wrapper>
        </>
      )
    }
  }

  return <>{chooseHeader()}</>
}

export default Header
