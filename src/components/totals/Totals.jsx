import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Totals = () => {
   const { total, setTotal, addressSet, setAddressSet, cardSet, setCardSet, setCart } = useContext(CartContext)
  let tax = total* .05
  let finalTotal = total + tax

  function handlePay() {
    if(total > 0) {
      if(addressSet) {
        if(cardSet) {
          setCart([])
          setAddressSet(false)
          setCardSet(false)
          setTotal(0)
        } else {
          alert("no card info set!")
        }
      } else {
        alert("no address set!")
      }
    } else {
      alert("no items in cart!")
    }
  }

  return (
    <div className='flex-direction-column justify-between text-lg h-full m-4 p-4 border w-1/2'>
        <h1 className='text-2xl'>Cart Total: ${total.toFixed(2)}</h1>
        <h1 className='text-2xl'>Tax: ${tax.toFixed(2)}</h1>
        <h1 className='text-2xl'>Total: ${finalTotal.toFixed(2)}</h1>
        <button className='border bg-yellow-700' onClick={handlePay}>Pay</button>
    </div>
  )
}

export default Totals