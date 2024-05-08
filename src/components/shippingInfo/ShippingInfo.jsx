import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ShippingInfo = () => {
  const { setAddressSet } = useContext(CartContext)
  const [address, setAddress] = useState(" ")
  const [city, setCity] = useState(" ")
  const [state, setState] = useState(" ")
  const [zip, setZip] = useState(" ")
  const addressform = document.getElementById('addressform')
  const h2s = document.getElementById('addressh2s')
  function handleSubmit(e) {
    e.preventDefault()
    setAddressSet(true)
    addressform.style.display = "none"
    h2s.style.display = "block"
  }
  return (
    <div className='flex flex-direction-column justify-between text-lg h-full m-4 p-4 border w-1/2'>
      <div id='addressh2s' style={{display: "none"}} className=''>
        <h2 className='text-lg m-4'>Address: {address}</h2>
        <h2 className='text-lg m-4'>City: {city}</h2>
        <h2 className='text-lg m-4'>State: {state}</h2>
        <h2 className='text-lg m-4'>Zip: {zip}</h2>
        <button className='border bg-yellow-700'
          onClick={()=>{
            setAddressSet(false)
          h2s.style.display = "none"
          addressform.style.display = "block"
          }}>Change Address</button>
      </div>
      <div>
        <form id='addressform' onSubmit={handleSubmit}>
          <label htmlFor="address">Address: </label>
          <input className='border m-2' id='address' value={address} onChange={(e) => {setAddress(e.target.value)}}></input>
          <br></br>
          <label htmlFor="city">City: </label>
          <input className='border m-2' id='city' value={city} onChange={(e) => {setCity(e.target.value)}}></input>
          <br></br>
          <label htmlFor="state">State: </label>
          <input className='border m-2' id='state' value={state} onChange={(e) => {setState(e.target.value)}}></input>
          <br></br>
          <label htmlFor="zip">Zip: </label>
          <input className='border m-2' id='zip' value={zip} onChange={(e) => {setZip(e.target.value)}}></input>
          <br></br>
          <button className='border bg-yellow-700' type='Submit'>Use Address</button>
        </form>
      </div>
    </div>
  )
}

export default ShippingInfo