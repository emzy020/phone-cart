import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './pages/cart'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cart/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
