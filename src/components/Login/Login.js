import React from 'react'
import { Redirect } from 'react-router-dom'
import './Login.scss'
import * as bgImg from './login-bg.jpg'

const Login = ({ logged, onLogin }) => {

   const renderLogin = () => {
      return (
         <div className='d-flex justify-content-between'>
            <div className='login'>
               <img 
                  className='login__img' 
                  src={bgImg} 
                  alt='mount'
               />
            </div>
            <div className='login p-4'>
               <h2>Login</h2>
               <form className=''>
                  <div className='form-group'>
                     <label htmlFor='loginEmail'>Email address</label>
                     <input 
                        type='email' 
                        className='form-control' 
                        id='loginEmail' 
                        aria-describedby='emailHelp' 
                        placeholder='your-email@mail.com'
                     />
                     <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                  </div>
                  <div className='form-group'>
                     <label htmlFor='loginPassword'>Password</label>
                     <input 
                        type='password' 
                        className='form-control' 
                        id='loginPassword' 
                        aria-describedby='passwordHelp' 
                     />
                     <small id='passwordHelp' className='form-text text-muted'>We'll never share your password with anyone else.</small>
                  </div>
                  <div className='form-group form-check'>
                     <input 
                        type='checkbox' 
                        className='form-check-input' 
                        id='loginCheckbox' 
                        defaultChecked="checked"
                     />
                     <label htmlFor='loginCheckbox'>I agree</label>
                  </div>
                  <a
                     className='btn btn-primary' 
                     onClick={onLogin}
                  >
                     Submit
                  </a>
               </form>
            </div>
         </div>
      )
   }

   const content = !logged ? renderLogin() : null
   const redirect = logged ? <Redirect to='/' /> : null

   return <>
      {content}
      {redirect}
   </>
}

export default Login