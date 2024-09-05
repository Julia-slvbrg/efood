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
import { Link } from 'react-router-dom'

type Props = {
  placeName: string
  info: string[]
  image: string
  rate: string
  description: string
}

export const Card = ({ placeName, info, image, rate, description }: Props) => {
  return (
    <CardWrapper>
      <img src={image} alt="Restaurante" />
      <Info>
        {info.map((element, index) => (
          <Tag key={index}>{element}</Tag>
        ))}
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
        <Link to="/la-dolce-vita-trattoria">
          <Tag $position="bottom">Saiba mais</Tag>
        </Link>
      </Container>
    </CardWrapper>
  )
}

export default Card
