import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
   return (
      <header className='header'>
         <h1>Login IU on React</h1>
         <Link to='/'> Home page </Link>
      </header>
   )
}

export default Header