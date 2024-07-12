import React, { useContext, useEffect, useState } from 'react'
import Filter from './Filter'
import Products from './Products'
import {UserContext} from '../Context/Context'
import { useLocation } from 'react-router-dom'
import axios from '../Utility/Axios'

const Deshboard = () => {
    const {products,setProducts} = useContext(UserContext)
    const {search} = useLocation()
    const category = decodeURIComponent(search.split('=')[1])
    const [filterCategories,setFilterCategries] = useState([])

    const getFilterData = async () =>{
        try {
            const {data} = await axios.get(`/products/category/${category}`)
            setFilterCategries(data)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        if(category != 'undefined') getFilterData()
        if((filterCategories && category) == 'undefined') setFilterCategries(products)
    },[products,search])
console.log(products)
  return (
    <div className='w-full flex md:px-10 px-2'>
        <Filter/>
        <Products products={filterCategories} />
    </div>
  )
}

export default Deshboard
