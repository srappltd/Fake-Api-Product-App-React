import { createContext, useEffect, useState } from "react";
import axios from '../Utility/Axios'

export const UserContext = createContext()

function Context(props) {
  const data = [
    {
        picture:"https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/t/j/m/46-99-bxio2013-bxio3003-bxsm3008-android-ios-beatxp-yes-original-imagyhznxtvm7utf.jpeg?q=70&crop=false",
        title:'beatXP Marv Ace 1.85" HD BT Calling, 100+ Sports Modes with IP67 Smartwatch  (Rose Pink Strap, Free Size)',
        price:999,
        description:'The beatXP Marv Ace smartwatch features a large 1.85" Ultra HD and has a remarkably fast 60Hz Refresh rate.',
        id:"1",
        addcart:false
    },
    {
        picture:"https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/3/8/g/-original-imagz67wy89jfvyt.jpeg?q=70&crop=false",
        title:'Noise Icon 3 1.91" Display with Bluetooth Calling, Metallic finish & Voice Assistant Smartwatch  (Deep Wine Strap, Regular)',
        price:1399,
        description:'Icon 3 is a 1.91" display smartwatch with metallic finish and thin bezels for you to enjour sharp & vibrant images.',
        id:"2",
        addcart:false
    },
    {
        picture:"https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/c/v/v/-original-imagz69g5jtypuwp.jpeg?q=70&crop=false",
        title:'Boult Drift BT Calling 1.69" HD Display, 140+ Watchfaces, Complete Health Monitoring Smartwatch  (Beige Strap, Free Size)',
        price:1099,
        description:'The Boult Drift smartwatch with its dedicated microphone and speaker allows you to answer and reject incoming calls with ease and provides you with an HD calling experience.',
        id:"3",
        addcart:false
    },
]
    const [products,setProducts] = useState([])
    const getProducts = async () =>{
        const {data} = await axios.get('/products')
        setProducts(data)
      }
      useEffect(()=>{
        getProducts()
      },[])

  return (
    <UserContext.Provider value={{products,setProducts}}>{props.children}</UserContext.Provider>
  )
}

export default Context
