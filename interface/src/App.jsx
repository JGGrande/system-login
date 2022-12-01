import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <form action="/dados" className='formulario'>
      <label htmlFor="nome" className='text-center'><strong>Digite seu nome:</strong></label><br />
      <input type="text" id='nome' placeholder='nome' /><br /><br />
      <label htmlFor="senha" className='text-center'><strong>Digite sua senha:</strong></label><br />
      <input type="password" id='senha' placeholder='senha' /><br /><br />
      <input type="submit" value="ENVIAR" id='btn'  />
    </form>
    </>
  )
}

export default App
