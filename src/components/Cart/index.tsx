import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import removeItem from '../../assets/images/icons/remove-item.svg'

import { RootReducer } from '../../store'
import { checkout, close, remove } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isCartOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    closeCart()
    dispatch(checkout())
  }

  const removeFromCart = (nome: string) => {
    dispatch(remove(nome))
  }

  return (
    <S.CartContainer className={isCartOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item, index) => (
                <S.CartItem key={index}>
                  <img src={item.dish.foto} alt="Prato" />
                  <div>
                    <h3>{item.dish.nome}</h3>
                    <p>{formatPrice(item.dish.preco)} </p>
                  </div>
                  <button>
                    <img
                      src={removeItem}
                      onClick={() => removeFromCart(item.dish.nome)}
                      alt="Retirar produto do carrinho"
                    />
                  </button>
                </S.CartItem>
              ))}
            </ul>

            <S.Price>
              Valor total <span>{formatPrice(getTotalPrice(items))}</span>
            </S.Price>

            <Button
              title="Continuar com a entrega"
              onClick={goToCheckout}
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
