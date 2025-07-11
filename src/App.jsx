import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"
import { ToastContainer } from 'react-toastify' 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category='Men' banner={men_banner} />} />
        <Route path='/women' element={<ShopCategory category='Women' banner={women_banner} />} />
        <Route path='/kids' element={<ShopCategory category='Kids' banner={kids_banner} />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App