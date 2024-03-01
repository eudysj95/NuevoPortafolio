// eslint-disable-next-line no-unused-vars
import React from 'react';
import calculadora from '../img/calculadora.png';
import multiStepForm from '../img/multi-step-form.png';
import hangmanGame from '../img/hangman-game.png';

export const Proyectos = () => {
  return (
    <>
    <h2 className='tituloProyectos'>Proyectos</h2>

    <div className='proyectos'>
        
        <div className='proyecto'>
            <img src={calculadora}  alt='img'/>
            <h2>Calculator-App</h2>
            <p>HTML CSS JAVASCRIPT REACT</p>
            <a href="https://calculator-app-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
            <a href="https://github.com/eudysj95/calculator-app" target='blank_'>Ver Código</a>
        </div>

        <div className='proyecto'>
            <img src={multiStepForm} alt="img" />
            <h2>Multi Step Form</h2>
            <p>HTML CSS JAVASCRIPT REACT</p>
            <a href="https://multi-step-form-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
            <a href="https://github.com/eudysj95/Multi-Step-Form" target='blank_'>Ver Código</a>
        </div>

        <div className='proyecto'>
            <img src={hangmanGame} alt="img" />
            <h2>Hangman Game</h2>
            <p>HTML CSS JAVASCRIPT REACT</p>
            <a href="https://hangman-game-eudysj95.netlify.app" target='blank_'>Ver Proyecto</a>
            <a href="https://github.com/eudysj95/hangman-game" target='blank_'>Ver Código</a>
        </div>

    </div>
    </>
  )
}
