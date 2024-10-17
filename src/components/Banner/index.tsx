import { Container, Info } from './styles'

type Props = {
  type: string
  name: string
  banner: string
}

const Banner = ({ type, name, banner }: Props) => {
  return (
    <Container style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Info type="food">{type.charAt(0).toUpperCase() + type.slice(1)}</Info>
        <Info type="name">{name}</Info>
      </div>
    </Container>
  )
}

export default Banner
