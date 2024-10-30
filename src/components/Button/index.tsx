import { BtnContainer } from './styles'

export type Props = {
  title: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ title, onClick, children }: Props) => {
  return (
    <BtnContainer title={title} onClick={onClick}>
      {children}
    </BtnContainer>
  )
}

export default Button
