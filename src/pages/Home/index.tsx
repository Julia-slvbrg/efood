import CardList from '../../components/CardList'

import { useGetRestaurantsQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  return (
    <>
      {restaurants ? (
        <>
          <CardList restaurants={restaurants} />
        </>
      ) : (
        <h4>Carregando...</h4>
      )}
    </>
  )
}

export default Home
