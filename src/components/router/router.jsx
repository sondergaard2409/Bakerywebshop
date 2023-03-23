import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Contact} from '../../webpages/contact'
import {Home} from '../../webpages/home'
import {Login} from '../../webpages/login'
import {Products} from '/../../webpages/products'
import {Hero} from '../../partials/hero'

export const Router = () => {
  return (
    <Routes>
        <Route index element={<Hero/>} />
        <Route path='/kontakt' element={<Contact/>} />
        <Route path='/produkter' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}