import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'



function App() {


  return (
    <>


      <Routes>

        <Route path='/' element={<Landing />} />

        <Route path='/auth' element={<Auth />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/Wish' element={<Wishlist />} />

        <Route path='/pro' element={<Product />} />

      </Routes>



    </>
  )
}

export default App
