import remove from '../../assets/images/icons/remove-item.svg'
import pizza from '../../assets/images/pizza.svg'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, Price, Sidebar } from './styles'

const Cart = () => {
  return (
    <CartContainer className="">
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="Prato" />
            <div>
              <h3>nome do prato</h3>
              <p>R$ 56,00 </p>
            </div>
            <button>
              <img src={remove} alt="Retirar produto do carrinho" />
            </button>
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Prato" />
            <div>
              <h3>nome do prato</h3>
              <p>R$ 56,00 </p>
            </div>
            <button>
              <img src={remove} alt="Retirar produto do carrinho" />
            </button>
          </CartItem>
        </ul>

        <Price>
          Valor total <span>R$ 542,15</span>
        </Price>

        <Button title="Continuar com a entrega">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
