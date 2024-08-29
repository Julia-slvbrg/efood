import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'
import { Container, Title } from './styles'
import { Logo } from '../../styles'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <Link to="/">
        <Logo src={logo} alt="efood" />
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Container>
  )
}

export default Header
