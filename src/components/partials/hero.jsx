import React from 'react'
import {NavLink} from 'react-router-dom'
import {Home} from '../webpages/home'
import {Herostyle} from './hero.style'
import {Heroimg} from './nav.style'

export const Hero = () => {
  return (
    <>
    <Heroimg>
    <Herostyle >
      <ul>
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="kontakt">Kontakt</NavLink></li>
      </ul>

        <h1>Bageriet</h1>
      
      <ul>
        <li><NavLink to="produkter">Produkter</NavLink></li>
        <li><NavLink to="login">Login</NavLink></li>
      </ul>
    </Herostyle>
    </Heroimg>

    <Home />
    </>

  )
}