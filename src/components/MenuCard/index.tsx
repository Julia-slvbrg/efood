import { useSelector } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import MenuModal from '../MenuModal'

import { RootReducer } from '../../store'

import { Container } from './styles'

const MenuCard = ({ dish, restaurantId }: DishProps) => {
  const [openModal, setOpenModal] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleButtonClick = () => {
    if (items.length > 0 && restaurantId !== items[0].restaurantId) {
      const confirmClear = window.confirm(
        'Você só pode adicionar produtos do mesmo restaurante ao carrinho. Se continuar, os produtos já adicionados serão removidos. Deseja continuar?'
      )
      if (confirmClear) setOpenModal(true)
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
        <div className='row'>
          <img src={dish.foto} alt="Prato" />

          <h4>{dish.nome}</h4>
          <p>{getDescription(dish.descricao)}</p>
        </div>
        <Button
          title="Adicionar ao carrinho"
          onClick={handleButtonClick}
          type="button"
        >
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
