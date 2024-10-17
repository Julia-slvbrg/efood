import { Container } from './styles'

type Props = {
  dish: string
  description: string
  picture: string
  serving: string
  price: number
}
export const MenuCard = ({
  dish,
  description,
  picture,
  serving,
  price
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 132) {
      return description.slice(0, 129) + '...'
    }
    return description
  }

  return (
    <>
      <Container>
        <img src={picture} alt="Prato" />

        <h4>{dish}</h4>
        <p>{getDescription(description)}</p>
        <button>Adicionar ao carrinho</button>
      </Container>
    </>
  )
}

export default MenuCard
