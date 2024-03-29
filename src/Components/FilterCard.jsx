import React from 'react'
import { Link } from 'react-router-dom'

const FilterCard = ({to,category}) => {
  return (
    <Link to={to} className='w-full flex items-center gap-3 hover:bg-sky-100 whitespace-nowrap py-2 px-4 rounded-sm'>
        <span className='w-3 h-3 rounded-full bg-sky-500 shrink-0'></span>
        <span className='font-medium text-sm w-full'>{category}</span>
    </Link>
  )
}

export default FilterCard
