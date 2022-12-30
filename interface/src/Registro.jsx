import { useState, useEffect } from 'react'
import { set, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from "react-modal"
import * as yup from "yup";
import './Registro.css'


import api from './Api.js';
import axios from 'axios';

const validationPost = yup.object({
  name: yup.string().required("Campo usuario não pode estar vazio!"),
  email: yup.string().required("Campo email não pode estar vazio!"),
  password: yup.string().required("Campo senha não pode estar vazio!"),
}).required();

Modal.setAppElement('#root')

function Registro() {

  //começo do modal

  const [modalIsOpen, setisOpen] = useState(false);
  const [errorMensagem, setErrorMensagem] = useState("")

  function openModal() {
    setisOpen(true)

    const divRegistro = document.querySelector('#registro')
    const inputName = document.querySelector('#name')
    const inputEmail = document.querySelector('#email')
    const inputPassword = document.querySelector('#password')

    if (inputEmail.value === '' && inputName.value === '' && inputPassword.value === '') {
      setisOpen(false)
      return
    }

    divRegistro.style.display = 'none'


  }

  function closeModal() {
    setisOpen(false)
  }


  //fim do modal    

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  })
  const addPost = data => axios.post("http://localhost:3000/auth/register", data)
    .then((body) => {
      openModal()
    })
    .catch((body) => {
      setErrorMensagem(body.response.data.error)
    })

  function redirecionarPagina() {
    window.location.href = '/'
  }


  return (
    <>
      <div id='registro'>
        <h1><strong>Registro</strong></h1>
        <div className='card-post'>
          <div className='line-post'></div>

          <div className='card-body-post'>

            <form onSubmit={handleSubmit(addPost)}>

              <h2>{errorMensagem}</h2>

              <div className='fields'>
                <label>Usuario:</label>
                <br />
                <input type="text" className='campo' name='name' {...register("name")} id='name' />
                <p className='error-message'>{errors.name?.message}</p>
              </div>

              <div className='fields'>
                <label>Email:</label>
                <br />
                <input type="email" className='campo' name='email' {...register("email")} id='email' />
                <p className='error-message'>{errors.email?.message}</p>
              </div>

              <div className='fields'>
                <label>Senha:</label>
                <br />
                <input type="password" className='campo' name='password' {...register("password")} id='password' />
                <p className='error-message'>{errors.password?.message}</p>
              </div>

              <div className='btn-post'>
                <button type='submit' className='btn'>Registrar</button>
              </div>


            </form>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <h2>Registro efetuado com sucesso!</h2>
            <button className='btn-modal' onClick={redirecionarPagina}>Voltar para o login</button>

          </Modal>

        </div>

      </div>



    </>
  )
}

export default Registro


