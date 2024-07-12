import { createContext, useEffect, useState } from "react";
import axios from '../Utility/Axios'

export const UserContext = createContext()

function Context(props) {
    const [products,setProducts] = useState([])
    const getProducts = async () =>{
        const {data} = await axios.get('/products')
        setProducts(data)
      }
      useEffect(()=>{
        products.length == 0 && getProducts()
      },[products])

  return (
    <UserContext.Provider value={{products,setProducts}}>{props.children}</UserContext.Provider>
  )
}

export default Context
