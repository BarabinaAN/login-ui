import React from 'react'
import { Link } from 'react-router-dom'
import Thumb from '../Thumb'

import './Header.scss'

const Header = ({ logged }) => {

   const renderLoginLink = () => {
      return (
         <Link to='/login/' className='nav-link text-light'>
            Регистрация
         </Link>
      )
   }

   const renderProfileLink = () => {
      return (
         <Link to='/personal/' className='nav-link text-light'>
            <Thumb />
         </Link>
      )
   }

   return (
      <header className='header d-flex justify-content-between align-items-center px-4 w-100'>
         <Link to='/' className='header__logo text-white text-decoration-none text-uppercase'>
            Login IU
               <span className='text-white-50'> on React </span>
         </Link>
         <nav className='nav align-items-center'>
            {!logged ? renderLoginLink() : renderProfileLink()}
            <Link to="/news/" className='nav-link text-light'>
               Новости
            </Link>
         </nav>
      </header>
   )
}

export default Header