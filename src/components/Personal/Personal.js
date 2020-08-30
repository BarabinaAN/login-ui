import React from 'react'
import './Personal.scss'

const Personal = () => {
   return (
      <section className='first-screen px-4 py-5'>
         <h1 className='mb-4'>Личный профиль</h1>
         <ol>
            <li>Имя</li>
            <li>Возраст</li>
            <li>Личная информация</li>
         </ol>
      </section>
   )
}

export default Personal