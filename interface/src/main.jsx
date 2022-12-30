import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Registro from './Registro'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Forgot_password from './Forgot_password'
import Reset_password from './Reset_password'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Registro />} />
        <Route path='/home/:name' element={<Home />} />
        <Route path='/forgot_password' element={<Forgot_password />} />
        <Route path='/reset_password' element={<Reset_password />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
