import React, { useContext, useEffect } from 'react'
import Product from './Product'

const Products = ({products}) => {
  return (
    <div className='w-full md:w-[80%] grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-3'>
        {products.map((product,index)=>{
            return <Product key={index} product={product} />
        })}
        
    </div>
  )
}

export default Products
