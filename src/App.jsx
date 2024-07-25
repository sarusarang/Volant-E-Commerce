import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Orders from './Pages/Orders'
import AdminLogin from './Pages/AdminLogin'
import AdminDash from './Pages/AdminDash'
import OrderForm from './Pages/OrderForm'
import { Toaster } from 'sonner'
import { useEffect, useState } from 'react'




function App() {

  const location = useLocation()

  const [Hide, sethide] = useState(false)



  useEffect(() => {


    const hidecheck = () => {

      if (location.pathname == '/auth' || location.pathname == '/adminlog' || location.pathname == '/admindash') {


        sethide(true)


      }
      else {

        sethide(false)
      }



    }

    hidecheck()

  }, [location])




  return (
    <>

      {!Hide && <Header />}


      <Routes>

        <Route path='/auth' element={<Auth />} />

        <Route path='/' element={<Landing />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/Wish' element={<Wishlist />} />

        <Route path='/pro/:id' element={<Product />} />

        <Route path='/ord' element={<Orders />} />

        <Route path='/adminlog' element={<AdminLogin />} />

        <Route path='/admindash' element={<AdminDash />} />

        <Route path='/orderform' element={<OrderForm />} />


      </Routes>

      <Toaster richColors position='top-center' />

      {!Hide && <Footer />}


    </>
  )
}

export default App
