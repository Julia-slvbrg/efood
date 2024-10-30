import Button from '../Button'
import MenuModal from '../MenuModal'
import { Container } from './styles'
import { useState } from 'react'

export type Props = {
  dish: string
  description: string
  picture: string
  serving: string
  price: number
}
const MenuCard = ({ dish, description, picture, serving, price }: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 158) + '...'
    }
    return description
  }

  return (
    <>
      <Container>
        <img src={picture} alt="Prato" />

        <h4>{dish}</h4>
        <p>{getDescription(description)}</p>
        <Button
          title="Adicionar ao carrinho"
          onClick={() => setOpenModal(true)}
        >
          Adicionar ao carrinho
        </Button>
      </Container>
      <MenuModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
        dish={dish}
        description={description}
        picture={picture}
        serving={serving}
        price={price}
      />
    </>
  )
}

export default MenuCard
