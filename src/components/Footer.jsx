// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>

        <h2>Contactame</h2>

        <form action="mailto:eudysjmorag@gmail.com" method="post">

            <label htmlFor="name">Nombre</label>
            <input type="text" name="name"/>

            <label htmlFor="Email">Correo Electrónico</label>
            <input type="email" name="email"/>

            <label htmlFor="asunto">Asunto</label>
            <input type="text" name="asunto"/>

            <label htmlFor="Nombre">Nombre</label>
            <textarea name="comments" cols="15" rows="5"/>

            <input type="submit" value="Enviar"/>

            {/* <input type="hidden" name='_next' value="http://"/> */}
            <input type="hidden" name='_captcha' value="false" />

        </form>

    </div>
  )
}
