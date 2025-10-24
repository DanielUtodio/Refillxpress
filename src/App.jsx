import React from 'react'
import ResetPassword from './auth/Reset'
import Verify from './auth/Verify'
import Footer from './components/Footer'
import Signup from "./auth/signup/Signup"
const App = () => {
  return (
    <div className="app">
      <Signup />
      <ResetPassword />
      <Verify />
      <Footer />
    </div>
  )
}

export default App
