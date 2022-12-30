import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './App.css'

import api from './Api.js';
import axios from 'axios';

const validationPost = yup.object({
  email: yup.string().required("Campo email não pode estar vazio!"),
  token: yup.string().required("Campo token não pode estar vazio!"),
  password: yup.string().required("Campo senha não pode estar vazio!"),
}).required();

function Reset_password() {

  const [errorMensagem, setErrorMensagem] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  })
  const addPost = data => axios.post("http://localhost:3000/auth/reset_password", data)
    .then((body) => {
      window.location.href = '/'
    })
    .catch((body) => {
      setErrorMensagem(body.response.data.error)
      console.log(data)
    })




  return (
    <>
      <h1><strong>Resetar Senha</strong></h1>
      <div className='card-post'>
        <div className='line-post'></div>

        <div className='card-body-post'>

          <form onSubmit={handleSubmit(addPost)}>

            <h2>Digites seus dados e o token que foi enviado por email</h2>

            <h2>{errorMensagem}</h2>

            <div className='fields'>
              <label>Email:</label>
              <br />
              <input type="email" className='campo' name='email' {...register("email")} />
              <p className='error-message'>{errors.email?.message}</p>
            </div>

            <div className='fields'>
              <label>Token:</label>
              <br />
              <input type="text" className='campo' name='token' {...register("token")} />
              <p className='error-message'>{errors.token?.message}</p>
            </div>

            <div className='fields'>
              <label>Nova Senha:</label>
              <br />
              <input type="password" className='campo' name='password' {...register("password")} />
              <p className='error-message'>{errors.password?.message}</p>
            </div>


            <div className='btn-post'>
              <button type='submit' className='btn'>Enviar</button>
            </div>


          </form>

          <br />

        </div>

      </div>

    </>
  )
}

export default Reset_password


