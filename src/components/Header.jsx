// eslint-disable-next-line no-unused-vars
import React from 'react'
import photoPerfil from '../img/EudysPerfil.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';

export const Header = () => {
  return (
    <header className='header'>

        <nav className='navbar'>
          <div className='correo'>
            <h5>eudysjmorag@gmail.com</h5>
          </div>
          <div className='redes'>
            <a href='https://github.com/eudysj95' target='blank_'> <img src={github} alt='redes' /> </a>
            <a href='https://www.linkedin.com/in/eudys-mora-a16431255/' target='blank_'> <img src={linkedin} alt='redes' /> </a>
            <a href='https://www.facebook.com/share/sdUronfyQVQNnVG9/?mibextid=qi2Omg' target='blank_'> <img src={facebook} alt='redes' /> </a>
          </div>
        </nav>

        <h2 className='titulo'>Mucho Gusto!</h2>
        <h1 className='titulo'>Soy <span>Eudys Mora.</span></h1>

        <p className='parrafo'>Soy un desarrollador web junior en busca de experiencia, me gusta aprender de todo, pero también me guusta especializarme en lo que hago.</p>

        <img src={photoPerfil} className='photoPerfil' alt='photo' />
      </header>
  )
}
