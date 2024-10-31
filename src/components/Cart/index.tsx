import { useDispatch, useSelector } from 'react-redux'
import removeItem from '../../assets/images/icons/remove-item.svg'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, Price, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../MenuModal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accum, current) => {
      return (accum += current.dish.preco)
    }, 0)
  }

  const removeFromCart = (nome: string) => {
    dispatch(remove(nome))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item, index) => (
            <CartItem key={index}>
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
            </CartItem>
          ))}
        </ul>

        <Price>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Price>

        <Button title="Continuar com a entrega">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
