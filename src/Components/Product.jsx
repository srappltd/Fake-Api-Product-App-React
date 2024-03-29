import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
    const {title,description,price,image,id} = product
  return (
    <Link to={`/product-detail/${id}`} className='w-full h-[250px] rounded flex flex-col border hover:border-none justify-between overflow-hidden hover:shadow-[0_0_8px_rgba(0,0,0,.4)] transition-all duration-300'>
        <div className='w-full'>
            <div className='w-full h-[120px] overflow-hidden bg-white'>
                <img src={image} className='w-full h-[120px] object-contain' alt="" />
            </div>
            <div className='w-full px-3 py-2'>
                <h1 className='font-semibold text-sm leading-[1.2] line-clamp-2'>{title}</h1>
                <h2 className='font-semibold text-lg mt-2 text-sky-500'>₹{price}</h2>
            </div>
        </div>
        <button className='py-2 w-full text-xs font-semibold text-white bg-blue-400'>Add to Cart</button>
    </Link>
  )
}

export default Product
