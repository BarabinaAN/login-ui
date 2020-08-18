import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ onLogin }) => {
   return (
      <header className='header'>
         <h1>Login IU on React</h1>
         <Link to='/'> Home page </Link>
         <div className='header__controls controls'>
            <button onClick={onLogin}>Login</button>
         </div>
      </header>
   )
}

export default Header