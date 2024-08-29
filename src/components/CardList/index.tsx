import Restaurant from '../../models/Restaurant'
import Card from '../Card'
import { List } from './styles'

export type Props = {
  restaurantPlace: Restaurant[]
}

export const CardList = ({ restaurantPlace }: Props) => {
  return (
    <List>
      {restaurantPlace.map((restaurant) => (
        <Card
          key={restaurant.id}
          placeName={restaurant.placeName}
          info={restaurant.info}
          image={restaurant.image}
          rate={restaurant.rate}
          description={restaurant.description}
        />
      ))}
    </List>
  )
}
