import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../Context/Context'

function ProductDetails() {
    const {products} = useContext(UserContext)
    const {id} = useParams()
    const product = products[id-1]
    const navigate = useNavigate()
    const goBackBtn = () =>{
        navigate('/')
    }
  return (
    <div className='w-full md:pt-20 pt-10 md:flex items-center justify-center relative'>
        <div className="card md:w-[100vh] md:h-[50vh] md:flex gap-10 p-5 md:p-0">
            <div className="left md:w-1/3 h-full flex items-center justify-center relative ">
                <img src={product.image} className='w-full' alt="" />
            </div>
            <div className="left md:w-2/3 md:h-full flex flex-col justify-center">
                <h1 className='font-semibold md:text-3xl text-xl line-clamp-2 mb-2'>{product.title}</h1>
                <span className='font-medium text-red-300 text-sm'>{product.category}</span>
                <h2 className='text-blue-400 font-medium mt-3'>₹ {product.price}</h2>
                <p className='font-medium mt-2 line-clamp-4 text-sm text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid saepe nesciunt quae. Ipsa quis laborum commodi a, reprehenderit nemo!</p>
                <div className='flex gap-5 mt-5'>
                    <button className='border py-1 px-5 rounded-sm border-blue-400 text-blue-400 text-sm font-semibold'>Edit</button>
                    <button className='border py-1 px-5 rounded-sm border-red-400 text-red-400 text-sm font-semibold'>Delete</button>
                </div>
            </div>
        </div>
        <button onClick={goBackBtn} className='absolute py-2 px-5 font-semibold text-xs border rounded top-2 left-10 bg-red-400 text-white'>Go Back</button>
    </div>
  )
}

export default ProductDetails
