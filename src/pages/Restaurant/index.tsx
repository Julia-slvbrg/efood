import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant as RestaurantType } from '../Home'
import Banner from '../../components/Banner'
import { MenuContainer } from '../../styles'
import MenuCardList from '../../components/MenuCardList'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantInfo(res))
  }, [id])

  return (
    <>
      {restaurantInfo ? (
        <>
          <Banner
            type={restaurantInfo?.tipo}
            name={restaurantInfo?.titulo}
            banner={restaurantInfo?.capa}
          />
          <MenuContainer className="container">
            <MenuCardList restaurant={restaurantInfo} />
          </MenuContainer>
        </>
      ) : (
        <p>Carregando....</p>
      )}
    </>
  )
}

export default Restaurant
