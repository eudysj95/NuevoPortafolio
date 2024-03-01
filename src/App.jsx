// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Habilidades } from './components/Habilidades'
import { Proyectos } from './components/Proyectos'
import { Footer } from './components/Footer'


function App() {


  return (
    <div className='container'>
      
      <Header />

      <hr />      

      <Habilidades />

      <hr /> 

      <Proyectos />

      <Footer />

    </div>
  )
}

export default App
