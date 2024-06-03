// eslint-disable-next-line no-unused-vars
import React from 'react'
import photoPerfil from '../img/EudysPerfil.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';

export const Header = () => {
  return (
    <header className='h-[500px]'>

        <nav className='flex justify-between p-2'>
          <div>
            <h5 className='font-bold text-lg xl:text-xl'>eudysjmorag@gmail.com</h5>
          </div>
          <div className='flex justify-between'>
            <a href='https://github.com/eudysj95' target='blank_'> <img className='w-8 h-8 xl:w-12 xl:h-12' src={github} alt='redes' /> </a>
            <a href='https://www.linkedin.com/in/eudys-mora-a16431255/' target='blank_'> <img className='w-8 h-8 xl:w-12 xl:h-12' src={linkedin} alt='redes' /> </a>
            <a href='https://www.facebook.com/share/sdUronfyQVQNnVG9/?mibextid=qi2Omg' target='blank_'> <img className='w-8 h-8 xl:w-12 xl:h-12' src={facebook} alt='redes' /> </a>
          </div>
        </nav>

        <div className='flex flex-col md:flex-row h-[70%] items-center p-4'>

          <img className='md:flex-none md:h-80 md:mt-8 md:object-contain mr-0 md:mr-0 xl:h-96 h-52 w-[50%] mb-6' src={photoPerfil} alt='photo' />

          <div className='md:flex md:flex-col md:justify-between md:mr-0 text-justify flex-wrap mr-4 p-2 md:p-4'>

            <h2 className='font-bold text-3xl md:text-5xl xl:text-7xl xl:mb-4 text-center'>Mucho Gusto!</h2>
            <h1 className='font-bold text-2xl mb-4 md:text-4xl xl:text-5xl text-center'>Soy <span className='underline decoration-4 decoration-[#4CE19D]'>Eudys Mora.</span></h1>

            <p className='text-lg md:text-2xl xl:text-4xl'>Soy un desarrollador web junior en busca de experiencia, me gusta aprender y especializarme en todo lo que hago.</p>

          </div>
          

        </div>
        
      </header>
  )
}
