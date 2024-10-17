import { Restaurant } from '../../pages/Home'
import Card from '../Card'
import { List, Wrapper } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const CardList = ({ restaurants }: Props) => {
  return (
    <Wrapper>
      <List className="container">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Card
              id={restaurant.id}
              placeName={restaurant.titulo}
              highlighted={restaurant.destacado}
              type={restaurant.tipo}
              image={restaurant.capa}
              rate={restaurant.avaliacao}
              description={restaurant.descricao}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

export default CardList
