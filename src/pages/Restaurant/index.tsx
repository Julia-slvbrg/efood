import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import { MenuContainer } from '../../styles'
import MenuCardList from '../../components/MenuCardList'
import { useGetMenuQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()
  const { data: restaurantInfo } = useGetMenuQuery(id!)

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
