import CardList from '../../components/CardList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

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
