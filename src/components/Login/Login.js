import React from 'react'
import './Login.scss'
import * as bgImg from './login-bg.jpg'

const Login = ({ onLogin }) => {
   return (
      <div className='login first-screen row no-gutters'>
         <div className='col-lg-6 col-sm-12'>
            <img
               className='login__img w-100'
               src={bgImg}
               alt='mount'
            />
         </div>
         <div className='col-lg-6 col-sm-12 px-4 py-5'>
            <h2 className='mb-4'>Регистрация</h2>
            <form>
               <div className='form-group'>
                  <label htmlFor='loginEmail'>Почта</label>
                  <input
                     type='email'
                     className='form-control'
                     id='loginEmail'
                     aria-describedby='emailHelp'
                     placeholder='your-email@mail.com'
                  />
                  <small id='emailHelp' className='form-text text-muted'>Введите адрес своей почты</small>
               </div>
               <div className='form-group'>
                  <label htmlFor='loginPassword'>Пароль</label>
                  <input
                     type='password'
                     className='form-control'
                     id='loginPassword'
                     aria-describedby='passwordHelp'
                  />
                  <small id='passwordHelp' className='form-text text-muted'>Пароль не должен быть более XXX символов</small>
               </div>
               <div className='form-group form-check'>
                  <input
                     type='checkbox'
                     className='form-check-input'
                     id='loginCheckbox'
                     defaultChecked="checked"
                  />
                  <label htmlFor='loginCheckbox'>Я согласен с обработкой персональных данных</label>
               </div>
               <button
                  className='btn btn-primary'
                  onClick={onLogin}
               >
                  Отправить
                  </button>
            </form>
         </div>
      </div>
   )
}

export default Login