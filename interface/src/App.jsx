import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './App.css'

import api from './Api.js';
import axios from 'axios';

const validationPost = yup.object({
  email: yup.string().required("Campo email não pode estar vazio!"),
  password: yup.string().required("Campo senha não pode estar vazio!"),
}).required();

function App() {

  const [user, setUser] = useState("")
  const [errorMensagem, setErrorMensagem] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  })
  const addPost = data => axios.post("http://localhost:3000/auth/authenticate", data)
    .then(async (body) => {
      await setUser(body.data.user.name)
      await console.log(body.data.user.name)
      window.location.href = `/home/${body.data.user.name}`
    })
    .catch((body) => {
      document.querySelector("#textResetPassword").style.display = 'block'
      setErrorMensagem(body.response.data.error)
      console.log(data)
    })




  return (
    <>
      <h1><strong>Login</strong></h1>
      <div className='card-post'>
        <div className='line-post'></div>

        <div className='card-body-post'>

          <form onSubmit={handleSubmit(addPost)}>

            <h2>{errorMensagem}</h2>

            <div className='fields'>
              <label>Email:</label>
              <br />
              <input type="email" className='campo' name='email' {...register("email")} />
              <p className='error-message'>{errors.email?.message}</p>
            </div>

            <div className='fields'>
              <label>Senha:</label>
              <br />
              <input type="password" className='campo' name='password' {...register("password")} />
              <p className='error-message'>{errors.password?.message}</p>
            </div>

            <p id='textResetPassword'><a href="/forgot_password">Esqueci minha senha</a></p>

            <div className='btn-post'>
              <button type='submit' className='btn'>Entrar</button>
            </div>


          </form>

          <br />
          <p>Não tem uma conta ainda ? Crie uma agora <a href="/register">clicando aqui</a></p>

        </div>

      </div>

    </>
  )
}

export default App


