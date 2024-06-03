// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Footer = () => {
  return (
    <div className='mt-8'>

        <h2 className='font-bold text-2xl md:text-4xl mb-2 ml-6 md:text-center'>Contactame</h2>

        <form className='flex flex-col md:items-center justify-center text-xl p-6 md:text-2xl' action="mailto:eudysjmorag@gmail.com" method="post">

            <label className='mb-2' htmlFor="name">Nombre</label>
            <input className='mb-4 md:w-[700px] p-2 text-black' type="text" name="name"/>

            <label className='mb-2' htmlFor="Email">Correo Electrónico</label>
            <input className='mb-4 md:w-[700px] p-2 text-black' type="email" name="email"/>

            <label className='mb-2' htmlFor="asunto">Asunto</label>
            <input className='mb-4 md:w-[700px] p-2 text-black' type="text" name="asunto"/>

            <label className='mb-2' htmlFor="Nombre">Nombre</label>
            <textarea className='mb-4 md:w-[700px] p-2 text-black' name="comments" cols="15" rows="5"/>

            <input className='bg-[#5BD7A1] p-2 w-[50%] md:w-[400px] md:p-6 md:text-3xl rounded-sm mt-2 block my-0 mx-auto' type="submit" value="Enviar"/>

            {/* <input type="hidden" name='_next' value="http://"/> */}
            <input type="hidden" name='_captcha' value="false" />

        </form>

    </div>
  )
}
