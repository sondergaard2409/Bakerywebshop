import React from 'react'
import {Bagværk} from '../partials/bagværk'
import {News} from '../partials/news'
import {Nyhedsbrev} from '../partials/nyhedsbrev'
import {HomeStyle} from '../style/home.style'

export const Home = () => {
  return (
    <>
    <HomeStyle>
      <h1>Nyheder</h1>
        <News />
        <Nyhedsbrev />
        <h1>Nyeste bagværk</h1>
        <Bagværk />
    </HomeStyle>
    </>


  )
}