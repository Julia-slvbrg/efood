import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import close_icon from '../../assets/images/icons/close.svg'

import { add, openCart } from '../../store/reducers/cart'

import {
  Background,
  CloseIcon,
  Info,
  ModalContainer,
  Picture,
  TextWrapper
} from './styles'
import { formatPrice } from '../../utils'

type ModalProps = DishProps & {
  openModal: boolean
  setOpenModal: () => void
}

const MenuModal = ({
  openModal,
  setOpenModal,
  dish,
  restaurantId
}: ModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        dish,
        restaurantId
      })
    )
    dispatch(openCart())
  }

  useEffect(() => {
    const closePopUp = (e: any) => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal()
      }
    }

    window.addEventListener('keydown', closePopUp)
    return () => window.removeEventListener('keydown', closePopUp)
  }, [openModal])

  if (openModal) {
    return (
      <Background onClick={setOpenModal}>
        <ModalContainer>
          <CloseIcon
            src={close_icon}
            alt="Ícone de fechar"
            onClick={setOpenModal}
          />
          <Info>
            <Picture src={dish.foto} alt="Prato" />
            <TextWrapper>
              <h4>{dish.nome}</h4>
              <div>
                <p>{dish.descricao}</p>
                <p>Serve: {dish.porcao}</p>
              </div>
              <Button
                title="Adicionar ao carrinho"
                onClick={addToCart}
                type="button"
              >
                Adicionar ao carrinho - {formatPrice(dish.preco)}
              </Button>
            </TextWrapper>
          </Info>
        </ModalContainer>
      </Background>
    )
  }
}

export default MenuModal
