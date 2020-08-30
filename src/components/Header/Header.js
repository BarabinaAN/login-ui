import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ logged }) => {
   const navLinks = [
      { url: '/personal/', title: 'Профиль' },
      { url: '/news/', title: 'Новости' }
   ]

   const renderNavLinks = () => {
      return navLinks.map(({ title, url }) => {
         const loginTitle = !logged && title === 'Профиль' ? 'Регистрация' : title

         return (
            <Link 
               key={loginTitle} 
               to={url} 
               className='nav-link text-light' 
            >
               {loginTitle}
            </Link>
         )
      })
   }


   return (
      <header className='header d-flex justify-content-between align-items-center px-4 w-100'>
         <Link to='/' className='header__logo text-white text-decoration-none text-uppercase'>
            Login IU
               <span className='text-white-50'> on React </span>
         </Link>
         <nav className='nav'>
            {renderNavLinks()}
         </nav>
      </header>
   )
}

export default Header