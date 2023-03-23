import React from 'react'
import {Navbar} from '../partials/nav'
import {ContactStyle} from '../style/contact.style'

export const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactStyle>
      <h2>Kontakt os</h2>
      <div className='grid'>
        <div className='right'>
          <input type="text" placeholder='Dit navn'/>
          <input type="email" placeholder='Din email'/>
          <textarea name="" id="" cols="50" rows="10" placeholder='Din besked'></textarea>
          <button>Send</button>
        </div>

        <img src={require('')} alt="" />
      </div>
    </ContactStyle>
    
    </>
    
  )
}