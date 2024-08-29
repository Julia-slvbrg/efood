import { CardList } from '../../components/CardList'
import Restaurant from '../../models/Restaurant'
import sushi from '../../assets/images/sushi.svg'
import pasta from '../../assets/images/pasta.svg'

const restaurantPlace: Restaurant[] = [
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    placeName: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: pasta,
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2
  },
  {
    placeName: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: pasta,
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3
  },
  {
    placeName: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: pasta,
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4
  },
  {
    placeName: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: pasta,
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5
  },
  {
    placeName: 'La Dolce Vita Trattoria',
    info: ['Italiana'],
    image: pasta,
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6
  }
]

export const Home = () => {
  return (
    <>
      <CardList restaurantPlace={restaurantPlace} />
    </>
  )
}

export default Home
