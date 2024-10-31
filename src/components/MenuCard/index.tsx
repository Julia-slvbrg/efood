import { useSelector } from 'react-redux'
import { useState } from 'react'
import Button from '../Button'
import MenuModal from '../MenuModal'
import { Container } from './styles'
import { RootReducer } from '../../store'

export type Props = {
  restaurantId: number
  dish: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}
const MenuCard = ({ dish, restaurantId }: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleButtonClick = () => {
    if (items.length > 0 && restaurantId !== items[0].restaurantId) {
      const confirmClear = window.confirm(
        'Você só pode adicionar produtos do mesmo restaurante ao carrinho. Se continuar, os produtos já adicionados serão removidos. Deseja continuar?'
      )
      if (confirmClear) {
        setOpenModal(true)
      }
    } else {
      setOpenModal(true)
    }
  }

  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 158) + '...'
    }
    return description
  }

  return (
    <>
      <Container>
        <img src={dish.foto} alt="Prato" />

        <h4>{dish.nome}</h4>
        <p>{getDescription(dish.descricao)}</p>
        <Button title="Adicionar ao carrinho" onClick={handleButtonClick}>
          Adicionar ao carrinho
        </Button>
      </Container>
      <MenuModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
        dish={dish}
        restaurantId={restaurantId}
      />
    </>
  )
}

export default MenuCard
