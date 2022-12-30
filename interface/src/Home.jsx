import React from 'react';
import './Home.css'

import api from './Api.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function Home() {

  const { name } = useParams();

  console.log(name)

  return (
    <>
      <h2> {name} está logado!</h2>

    </>
  )
}

export default Home


