// eslint-disable-next-line no-unused-vars
import React from 'react';
import calculadora from '../img/calculadora.png';
import cuevana from '../img/cuevana.png';
import hangmanGame from '../img/hangman-game.png';
import back from '../img/back.png';
import api from '../img/api-rest-countries.png';

export const Proyectos = () => {
  return (
    <>
    <h2 className='font-bold text-3xl m-4'>Proyectos</h2>

    <div className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center items-center'>
        
        <div className='p-8 xl:w-[40%] mx-auto'>
            <img className='mb-2 mx-auto rounded-md h-96' src={calculadora}  alt='img'/>
            <h2 className='font-bold text-3xl mb-6 md:text-5xl text-center'>Calculator-App</h2>
            <div className='grid grid-cols-3 gap-y-1 mb-2 md:text-2xl'>
              <p>HTML</p>
              <p>CSS</p>
              <p>TAILWIND</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </div>
            <div className='flex justify-around text-sm'>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg md:text-2xl md:p-4 rounded-sm mt-4" href="https://calculatorapp-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg rounded-sm md:text-2xl md:p-4 mt-4" href="https://github.com/eudysj95/CalculatorApp" target='blank_'>Ver Código</a>
            </div>
        </div>

        <div className='p-8 xl:w-[40%] mx-auto'>
            <img className='mb-2 mx-auto rounded-md h-96' src={cuevana} alt="img" />
            <h2 className='font-bold text-3xl mb-6 md:text-5xl text-center'>Cuevana CRUD</h2>
            <div className='grid grid-cols-3 gap-y-1 mb-2 md:text-2xl'>
              <p>HTML</p>
              <p>CSS</p>
              <p>TAILWIND</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </div>
            <div className='flex justify-between text-sm mb-2'>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg md:text-2xl md:p-4 rounded-sm mt-4" href="https://cuevana-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg rounded-sm md:text-2xl md:p-4 mt-4" href="https://github.com/eudysj95/Cuevana" target='blank_'>Ver Código</a>
            </div>
        </div>

        <div className='p-8 xl:w-[40%] mx-auto'>
            <img className='mb-2 mx-auto rounded-md h-96' src={back} alt="img" />
            <h2 className='font-bold text-3xl mb-6 md:text-5xl text-center'>NodeJs Server CRUD</h2>
            <div className='grid grid-cols-3 gap-y-1 mb-2 md:text-2xl'>
              <p>NODE JS</p>
              <p>EXPRESS JS</p>
              <p>MONGODB</p>
              <p>MONGOOSE</p>
            </div>
            <div className='flex justify-between text-sm mb-2'>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg rounded-sm md:text-2xl md:p-4 mt-4" href="https://github.com/eudysj95/BackendCuevana" target='blank_'>Ver Código</a>
            </div>
        </div>

        <div className='p-8 xl:w-[40%] mx-auto'>
            <img className='mb-2 rounded-md h-96' src={hangmanGame} alt="img" />
            <h2 className='font-bold text-3xl mb-6 md:text-5xl text-center'>Hangman Game</h2>
            <div className='grid grid-cols-3 gap-y-1 mb-2 md:text-2xl'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </div>
            <div className='flex justify-between text-sm mb-2'>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg md:text-2xl md:p-4 rounded-sm mt-4" href="https://the-hangman-game-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg rounded-sm md:text-2xl md:p-4 mt-4" href="https://github.com/eudysj95/TheHangmanGame" target='blank_'>Ver Código</a>
            </div>
        </div>

        <div className='p-8 xl:w-[40%] mx-auto'>
            <img className='mb-2 rounded-md h-96' src={api} alt="img" />
            <h2 className='font-bold text-3xl mb-6 md:text-5xl text-center'>Api Rest Countries</h2>
            <div className='grid grid-cols-3 gap-y-1 mb-2 md:text-2xl'>
              <p>HTML</p>
              <p>CSS</p>
              <p>TAILWIND</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
            </div>
            <div className='flex justify-between text-sm mb-2'>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg md:text-2xl md:p-4 rounded-sm mt-4" href="https://api-rest-countries-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
              <a className="bg-[#5BD7A1] text-white p-2 text-lg rounded-sm md:text-2xl md:p-4 mt-4" href="https://github.com/eudysj95/Api-Rest-Countries" target='blank_'>Ver Código</a>
            </div>
        </div>

    </div>
    </>
  )
}
