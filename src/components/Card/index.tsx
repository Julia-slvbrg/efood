import { Link } from 'react-router-dom'
import Tag from '../Tags'
import star from '../../assets/images/star.svg'
import {
  CardWrapper,
  Container,
  Description,
  Info,
  Name,
  TitleContainer
} from './styles'

type Props = {
  id: number
  placeName: string
  highlighted: boolean
  type: string
  image: string
  rate: number
  description: string
}

export const Card = ({ id, placeName, highlighted, type, image, rate, description }: Props) => {
  return (
    <CardWrapper>
      <img src={image} alt="Restaurante" />
      <Info>
        {highlighted && (<Tag>Destaque da semana</Tag>)}
        <Tag>{type.charAt(0).toUpperCase() + type.slice(1)}</Tag>
      </Info>
      <Container>
        <TitleContainer>
          <Name>{placeName}</Name>
          <div>
            <p>{rate}</p>
            <img src={star} alt="Estrela" />
          </div>
        </TitleContainer>
        <Description>{description}</Description>
        <Link to={`/restaurant/${id}`}>
          <Tag $position="bottom">Saiba mais</Tag>
        </Link>
      </Container>
    </CardWrapper>
  )
}

export default Card
