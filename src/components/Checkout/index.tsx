import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { clear, closeCheckout, openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { formatPrice, getTotalPrice } from '../../utils'

import Button from '../Button'

import * as S from '../Cart/styles'
import * as F from './styles'

const Checkout = () => {
  const { isCheckout, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const [isPayment, setIsPayment] = useState(false)
  const navigate = useNavigate()

  const closeCheckoutModal = () => {
    dispatch(closeCheckout())
  }

  const goToCart = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  const form = useFormik({
    initialValues: {
      recipientFullName: '',
      recipientAddressDescription: '',
      recipientCitty: '',
      recipientZipCode: '',
      recipientAddressNumber: '',
      recipientAddressComplement: '',
      cardOwnerName: '',
      cardNumber: '',
      cardCode: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      recipientFullName: Yup.string()
        .min(5, 'O nome precisa ter ao menos 5 caracteres')
        .required('O campo é obrigatório'),
      recipientAddressDescription: Yup.string()
        .min(4, 'O endereço deve ter ao menos 4 caracteres')
        .required('O campo é obrigatório'),
      recipientCitty: Yup.string()
        .min(3, 'A cidade deve ter ao menos 3 caracteres')
        .required('O campo é obrigatório'),
      recipientZipCode: Yup.string()
        .min(10, 'O CEP deve ter 8 caracteres')
        .max(10, 'O CEP deve ter 8 caracteres')
        .required('O campo é obrigatório'),
      recipientAddressNumber: Yup.string()
        .min(1, 'O número deve ter ao menos 1 caracter')
        .required('O campo é obrigatório'),
      recipientAddressComplement: Yup.string().notRequired(),
      cardOwnerName: Yup.string()
        .min(5, 'O nome precisa ter ao menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19)
        .max(19)
        .required('O campo é obrigatório'),
      cardCode: Yup.string().min(3).max(3).required('O campo é obrigatório'),
      expirationMonth: Yup.string()
        .min(2)
        .max(2)
        .required('O campo é obrigatório'),
      expirationYear: Yup.string()
        .min(2)
        .max(2)
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.dish.id,
          price: item.dish.preco as number
        })),
        delivery: {
          receiver: values.recipientFullName,
          address: {
            description: values.recipientAddressDescription,
            city: values.recipientCitty,
            zipCode: values.recipientZipCode,
            number: Number(values.recipientAddressNumber),
            complement: values.recipientAddressComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwnerName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPayment = () => {
    form.touched.recipientFullName &&
    form.touched.recipientAddressDescription &&
    form.touched.recipientAddressNumber &&
    form.touched.recipientCitty &&
    form.touched.recipientZipCode
      ? !checkInputHasError('recipientFullName') &&
        !checkInputHasError('recipientAddressDescription') &&
        !checkInputHasError('recipientCitty') &&
        !checkInputHasError('recipientZipCode') &&
        !checkInputHasError('recipientAddressNumber')
        ? setIsPayment(true)
        : setIsPayment(false)
      : setIsPayment(false)
  }

  useEffect(() => {
    if (isSuccess) dispatch(clear())
  }, [isSuccess])

  const goToHome = () => {
    dispatch(closeCheckout())
    navigate('/')
    return window.location.reload()
  }

  return (
    <S.CartContainer className={isCheckout ? 'is-open' : ''}>
      <S.Overlay onClick={closeCheckoutModal} />
      <F.SidebarCheckout>
        {isSuccess && data ? (
          <>
            <F.Title>
              Pedido realizado - <span>{data?.orderId}</span>
            </F.Title>
            <F.Text>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </F.Text>
            <Button title="Concluir" type="button" onClick={goToHome}>
              Concluir
            </Button>
          </>
        ) : !isPayment ? (
          <>
            <F.Title>Entrega</F.Title>
            <>
              <F.Row>
                <label htmlFor="recipientFullName">Quem irá receber</label>
                <input
                  type="text"
                  id="recipientFullName"
                  name="recipientFullName"
                  value={form.values.recipientFullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('recipientFullName') ? 'error' : ''
                  }
                />
              </F.Row>
              <F.Row>
                <label htmlFor="recipientAddressDescription">Endereço</label>
                <input
                  type="text"
                  id="recipientAddressDescription"
                  name="recipientAddressDescription"
                  value={form.values.recipientAddressDescription}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('recipientAddressDescription')
                      ? 'error'
                      : ''
                  }
                />
              </F.Row>
              <F.Row>
                <label htmlFor="recipientCity">Cidade</label>
                <input
                  type="text"
                  id="recipientCitty"
                  name="recipientCitty"
                  value={form.values.recipientCitty}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('recipientCitty') ? 'error' : ''
                  }
                />
              </F.Row>
              <F.Row>
                <F.Complements>
                  <div>
                    <label htmlFor="recipientZipCode">CEP</label>
                    <InputMask
                      type="text"
                      name="recipientZipCode"
                      id="recipientZipCode"
                      value={form.values.recipientZipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('recipientZipCode') ? 'error' : ''
                      }
                      mask="99.999-999"
                    />
                  </div>
                  <div>
                    <label htmlFor="recipientAddressNumber">Número</label>
                    <input
                      type="text"
                      name="recipientAddressNumber"
                      id="recipientAddressNumber"
                      value={form.values.recipientAddressNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('recipientAddressNumber')
                          ? 'error'
                          : ''
                      }
                    />
                  </div>
                </F.Complements>
              </F.Row>
              <F.Row>
                <label htmlFor="recipientAddressComplement">
                  Complemento (opcional)
                </label>
                <input
                  type="text"
                  name="recipientAddressComplement"
                  id="recipientAddressComplement"
                  value={form.values.recipientAddressComplement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </F.Row>
              <F.Row $marginTop="16px">
                <Button
                  title="Continuar com o pagamento"
                  onClick={goToPayment}
                  type="button"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  title="Voltar para o carrinho"
                  onClick={goToCart}
                  type="button"
                >
                  Voltar para o carrinho
                </Button>
              </F.Row>
            </>
          </>
        ) : (
          <>
            <p>
              Pagamento - Valor a pagar R$ {formatPrice(getTotalPrice(items))}{' '}
            </p>
            <form onSubmit={form.handleSubmit}>
              <F.Row>
                <label htmlFor="cardOwnerName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardOwnerName"
                  name="cardOwnerName"
                  value={form.values.cardOwnerName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardOwnerName') ? 'error' : ''}
                />
              </F.Row>
              <F.Complements>
                <F.Row>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </F.Row>
                <F.Row $rowWidth="40%">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </F.Row>
              </F.Complements>
              <F.Complements>
                <F.Row>
                  <label htmlFor="expirationMonth">Mês do vencimento</label>
                  <InputMask
                    type="text"
                    id="expirationMonth"
                    name="expirationMonth"
                    value={form.values.expirationMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expirationMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </F.Row>
                <F.Row>
                  <label htmlFor="expirationYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expirationYear"
                    name="expirationYear"
                    value={form.values.expirationYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expirationYear') ? 'error' : ''
                    }
                    mask="99"
                  />
                </F.Row>
              </F.Complements>
              <F.Row $marginTop="20px">
                <Button
                  title="Finalizar pagamento"
                  type="submit"
                  onClick={form.handleSubmit}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  title="Voltar para a edição de endereço"
                  type="button"
                  onClick={() => setIsPayment(false)}
                >
                  Voltar para a edição de endereço
                </Button>
              </F.Row>
            </form>
          </>
        )}
      </F.SidebarCheckout>
    </S.CartContainer>
  )
}
export default Checkout
