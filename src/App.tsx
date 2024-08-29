import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import RoutesComponent from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="container">
        <RoutesComponent />
      </div>
    </BrowserRouter>
  )
}

export default App
