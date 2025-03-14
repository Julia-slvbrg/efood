import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/icons/instagram.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import twitter from '../../assets/images/icons/twitter.svg'

import { Logo } from '../../styles'
import { Socials, Wrapper } from './styles'

export const Footer = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="" />
      </Link>
      <Socials>
        <li>
          <Link to="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="instagram" />
          </Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/?locale=pt_BR" target="_blank">
            <img src={facebook} alt="facebook" />
          </Link>
        </li>
        <li>
          <Link to="https://x.com/i/flow/login" target="_blank">
            <img src={twitter} alt="twitter" />
          </Link>
        </li>
      </Socials>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Wrapper>
  )
}

export default Footer
