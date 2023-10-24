import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import ShoppingCart from './pages/ShoppingCart'
import Checkout from './pages/Checkout'
import NoMatch from './pages/NoMatch'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/register" element={<UserLogin />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App;
