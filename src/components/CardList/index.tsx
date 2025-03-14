import Card from '../Card'

import * as S from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const CardList = ({ restaurants }: Props) => {
  return (
    <S.Wrapper>
      <S.List className="container">
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
      </S.List>
    </S.Wrapper>
  )
}

export default CardList
