import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import ShowProduct from '../pages/ShowProduct'

const BaseRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail/>} />
        <Route path='/product-show' element ={<ShowProduct/>}/>
    </Routes>
  )
}

export default BaseRouter