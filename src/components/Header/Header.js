import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
   return (
      <header className='header d-flex justify-content-between align-items-center px-4 w-100'>
         <Link to='/' className='header__logo text-white text-decoration-none text-uppercase'> 
            Login IU 
            <span className='text-white-50'> on React </span> 
         </Link>
         <nav className='nav' >
            <Link to='/login/' className='nav-link text-light'> 
               Login 
            </Link>
            <Link to='/login/' className='nav-link disabled'> 
               Another 
            </Link>
         </nav>
      </header>
   )
}

export default Header