import React, { useContext, useEffect, useState } from 'react'
import Filter from './Filter'
import Products from './Products'
import {UserContext} from '../Context/Context'
import { useLocation } from 'react-router-dom'
import axios from '../Utility/Axios'
import Loader from './Loader'
import LoginPage from './LoginPage'

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
        setFilterCategries([])
        if(category != 'undefined') getFilterData()
        if((filterCategories && category) == 'undefined') setFilterCategries(products)
    },[products,search])
  return (
    <div className='w-full flex md:px-10 px-2'>
        <Filter/>
        <Products products={filterCategories} />
        {(filterCategories && category) == 'undefined' && filterCategories.length == 0 && <Loader />}
    </div>
  )
}

export default Deshboard
