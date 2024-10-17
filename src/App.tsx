import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import RoutesComponent from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="container">
      </div>
        <RoutesComponent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
