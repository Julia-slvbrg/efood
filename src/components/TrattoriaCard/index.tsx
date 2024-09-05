import pizza from '../../assets/images/pizza.svg'
import { Container } from './styles'

export const TrattoriaCard = () => {
  return (
    <Container>
      <img src={pizza} alt="Pizza" />

      <h4>Pizza Marguerita</h4>
      <p>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </p>
      <button>Adicionar ao carrinho</button>
    </Container>
  )
}

export default TrattoriaCard
