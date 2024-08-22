import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'
import { Container, Logo, Title } from './styles'

export const Header = () => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <Logo src={logo} alt="efood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Container>
  )
}

export default Header
