import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Toaster } from 'sonner'




function App() {

  const location = useLocation()

  const hideHeaderFooter = location.pathname == '/auth'


  return (
    <>

      {!hideHeaderFooter && <Header />}


      <Routes>

        <Route path='/auth' element={<Auth />} />

        <Route path='/' element={<Landing />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/Wish' element={<Wishlist />} />

        <Route path='/pro' element={<Product />} />

      </Routes>

      <Toaster richColors position='top-center'/>

      {!hideHeaderFooter && <Footer />}




    </>
  )
}

export default App
