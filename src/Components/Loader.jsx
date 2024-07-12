import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center fixed top-0 left-0'>
        <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
    </div>
  )
}

export default Loader
