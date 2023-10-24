import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import UserRegister from '../pages/UserRegister'
import UserLogin from '../pages/UserLogin'
import NoMatch from './NoMatch'
import NavBar from './NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/register" element={<UserLogin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App;
