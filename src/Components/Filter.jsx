import React, { useContext } from 'react'
import FilterCard from './FilterCard'
import { set } from 'react-hook-form'
import { UserContext } from '../Context/Context'

const Filter = () => {
    const {products} = useContext(UserContext)
    const productCategory = products.map(product=>{return product.category})

    const categories = productCategory.filter((category,index)=>productCategory.indexOf(category) === index)
    
  return (
    <div className='w-[20%] hidden md:block h-screen border-r p-2'>
        <h1 className='font-semibold text-lg'>Category Filter</h1>
        <div className='w-full flex-col gap-1 flex mt-2'>
            {categories.map((category,index)=><FilterCard to={`/filter?category=${category}`} category={category} key={index}/>)}
        </div>
        
    </div>
  )
}

export default Filter
