import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Searchbar = () => {
  const { search, setSearch } = useContext(CartContext)

  return (
    <div className='p-3 bg-teal-900'>
      <div className='flex justify-center'>
          <h1 className='text-lg'>Search:</h1>
          <input id="search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
      </div>
    </div>
  )
}

export default Searchbar