import CardList from '../../components/CardList'
import Loader from '../../components/Loader'

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
        <Loader />
      )}
    </>
  )
}

export default Home
