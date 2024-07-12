import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Deshboard from './Components/Deshboard'
import Filter from './Components/Filter'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import ProductForm from './Components/ProductForm'
import LoginPage from './Components/LoginPage'
import PageNotFound from './PageNotFound'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Deshboard}>
          <Route path='/filter' Component={Filter}/>
          <Route path='/product' Component={Products}/>
        </Route>
        <Route path='/product-detail/:id' Component={ProductDetails} />
        <Route path='/add-product' Component={ProductForm} />
        <Route path='/login' Component={LoginPage}/>
        <Route path='*' Component={PageNotFound}/>
      </Routes>
    </div>
  )
}

export default App
