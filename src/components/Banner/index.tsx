import banner from '../../assets/images/trattoriaHeader.svg'
import { Container, Info } from './styles'


export const Banner = () => {
  return (
    <Container style={{ backgroundImage: `url(${banner})` }}>
      <Info type="food">Italiana</Info>
      <Info type="name">La Dolce Vita Trattoria</Info>
    </Container>
  )
}

export default Banner
