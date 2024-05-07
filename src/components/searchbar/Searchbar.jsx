import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Searchbar = () => {
  const { search, setSearch } = useContext(CartContext)

  return (
    <div className='flex justify-center'>
        <h1>Search</h1>
        <input id="search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        {/* prolly need a const function called to the global variable thingy to send the input info and filter itemlist */}
    </div>
  )
}

export default Searchbar