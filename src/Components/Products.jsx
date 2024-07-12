import React, { useContext, useEffect } from 'react'
import Product from './Product'
import Loader from './Loader'

const Products = ({products}) => {
  return (
    <div className='w-full md:w-[80%] grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-3'>
        {products.length != 0 ? products.map((product,index)=>{
            return <Product key={index} product={product} />
        }) : <Loader/> }
        
    </div>
  )
}

export default Products
