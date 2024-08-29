import Card from './components/Card'
import { CardList } from './components/CardList'
import Header from './components/Header'
import Restaurant from './models/Restaurant'
import { GlobalStyle } from './styles'

const restaurantPlace: Restaurant[] = [
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: 'https://placehold.co/472x217',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: 'https://placehold.co/472x217',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 2
  },
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: 'https://placehold.co/472x217',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 3
  },
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: 'https://placehold.co/472x217',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 4
  },
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: 'https://placehold.co/472x217',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 5
  },
  {
    placeName: 'Hioki Sushi',
    info: ['Destaque da semana', 'Japonesa'],
    image: 'https://placehold.co/472x217',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    id: 6
  }
]

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="container">
        <CardList restaurantPlace={restaurantPlace} />
      </div>
    </>
  )
}

export default App
