import React from 'react'
import CustomerLogin from './customer_Auth/CustomerLogin'
import CustomerSignup from './customer_Auth/CustomerSignup'
import VendorSignUp from './customer_Auth/VendorSignUp'
import { HashRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<CustomerLogin />} />
        <Route path='register' element={<CustomerSignup />} />
        <Route path='register/register-vendor' element={<VendorSignUp />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
