import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita-trattoria" element={<Restaurant />} />
  </Routes>
)

export default RoutesComponent
