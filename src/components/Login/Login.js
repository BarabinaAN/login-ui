import React from 'react'
import { Redirect } from 'react-router-dom'
import './Login.scss'

const Login = ({ logged }) => {
   const content = !logged ? <p>Login</p> : null
   const redirect = logged ? <Redirect to='/' /> : null

   return <>
      {content}
      {redirect}
   </>
}

export default Login