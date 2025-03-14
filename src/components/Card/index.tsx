import { Link } from 'react-router-dom'

import Tag from '../Tags'

import star from '../../assets/images/star.svg'
import * as S from './styles'

type Props = {
  id: number
  placeName: string
  highlighted: boolean
  type: string
  image: string
  rate: number
  description: string
}

export const Card = ({
  id,
  placeName,
  highlighted,
  type,
  image,
  rate,
  description
}: Props) => {
  return (
    <S.CardWrapper>
      <img src={image} alt="Restaurante" />
      <S.Info>
        {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{type.charAt(0).toUpperCase() + type.slice(1)}</Tag>
      </S.Info>
      <S.Container>
        <S.TitleContainer>
          <S.Name>{placeName}</S.Name>
          <div>
            <p>{rate}</p>
            <img src={star} alt="Estrela" />
          </div>
        </S.TitleContainer>
        <S.Description>{description}</S.Description>
        <Link to={`/restaurant/${id}`}>
          <Tag $position="bottom">Saiba mais</Tag>
        </Link>
      </S.Container>
    </S.CardWrapper>
  )
}

export default Card
