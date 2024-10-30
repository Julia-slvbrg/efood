import { useEffect } from 'react'
import { Props as MenuCardProps } from '../MenuCard'
import close_icon from '../../assets/images/icons/close.svg'
import {
  Background,
  CloseIcon,
  Info,
  ModalContainer,
  Picture,
  TextWrapper
} from './styles'
import Button from '../Button'

type ModalProps = MenuCardProps & {
  openModal: boolean
  setOpenModal: () => void
}

const MenuModal = ({
  openModal,
  setOpenModal,
  dish,
  description,
  picture,
  serving,
  price
}: ModalProps) => {
  useEffect(() => {
    const closePopUp = (e: any) => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal()
      }
    }

    window.addEventListener('keydown', closePopUp)
    return () => window.removeEventListener('keydown', closePopUp)
  }, [openModal])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

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
            <Picture src={picture} alt="Prato" />
            <TextWrapper>
              <h4>{dish}</h4>
              <div>
                <p>{description}</p>
                <p>Serve: {serving}</p>
              </div>
              <Button title="Adicionar ao carrinho">
                Adicionar ao carrinho - {formatPrice(price)}
              </Button>
            </TextWrapper>
          </Info>
        </ModalContainer>
      </Background>
    )
  }
}

export default MenuModal
