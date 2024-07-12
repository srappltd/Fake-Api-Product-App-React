import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import Loader from './Loader'
import { UserContext } from '../Context/Context'
import FilterCard from './FilterCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Products = ({products}) => {
  const productFilter = useContext(UserContext)
  const [filterMenu,setFilterMenu] = useState(false)
  const {search} = useLocation()
  const navigate = useNavigate(null)
    const productCategory = productFilter.products.map(product=>{return product.category})

    const categories = productCategory.filter((category,index)=>productCategory.indexOf(category) === index)
  return (
    <div className='w-full md:w-[80%]'>
      <div className='w-full flex md:hidden px-3 flex-col items-end select-none'>
       <div className='py-2 px-3 border mt-2 whitespace-nowrap text-xs flex items-center justify-center font-medium cursor-pointer' onClick={()=>setFilterMenu(!filterMenu)}>{ search != undefined ? decodeURIComponent(search.split('=')[1]) :  'Select Now'} <i class="ri-arrow-down-s-fill"></i></div>
       <div className={`w-full mt-2 text-xs cursor-pointer border px-2 py-2 ${ filterMenu ? 'flex' : 'hidden'} transition-all duration-300 flex-col`}>
{categories.length != 0 ? categories.map((category,index)=><Link to={`/filter?category=${category}`} className={`w-full py-2 ${'border-b'} font-medium`} onClick={()=>setFilterMenu(!filterMenu)}>{category}</Link>) : '' }
        
       </div>
      </div>
    <div className='grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-3'>
        {products.length != 0 ? products.map((product,index)=>{
            return <Product key={index} product={product} />
        }) : <Loader/> }
        
    </div>
    </div>
  )
}

export default Products
