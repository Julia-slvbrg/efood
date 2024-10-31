import { Restaurant } from '../../pages/Home'
import MenuCard from '../MenuCard'

type Props = {
  restaurant: Restaurant
}

const MenuCardList = ({ restaurant }: Props) => {
  if (!restaurant?.cardapio) {
    return <p>Carregando...</p>
  }

  return (
    <>
      {restaurant.cardapio.map((dish, index) => (
        <MenuCard key={index} dish={dish} restaurantId={restaurant.id} />
      ))}
    </>
  )
}

export default MenuCardList
