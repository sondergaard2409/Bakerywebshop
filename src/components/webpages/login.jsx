import React from 'react'
import {Navbar} from '../partials/nav'
import {LoginStyle} from '../style/login.style'

export const Login = () => {
  return (
    <>
    <LoginStyle> 
    <Navbar />
    
      <h2>Login</h2>
      <div className='center'>
        <div>
          <input type="username" placeholder='Brugernavn'/>
          <input type="password" placeholder='Password'/>
          <div className='right'>
          <button>Log ind</button>
          </div>
        </div>
        
      </div>
      </LoginStyle>
    </>

  )
}