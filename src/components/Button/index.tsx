import { BtnContainer } from './styles'

export type Props = {
  title: string
  onClick?: () => void
  children: React.ReactNode
  type: 'button' | 'submit'
}

const Button = ({ title, onClick, children, type }: Props) => {
  return (
    <BtnContainer title={title} onClick={onClick} type={type}>
      {children}
    </BtnContainer>
  )
}

export default Button
