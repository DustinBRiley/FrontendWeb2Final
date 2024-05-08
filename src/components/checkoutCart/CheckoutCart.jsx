import React from 'react'
import { CartContext } from '../../context/CartContext'

const CheckoutCart = () => {
  const {cart, addtoCart, removeFromCart} = React.useContext(CartContext)
  return (
    <div className='flex-direction-column justify-between text-lg h-full m-4 p-4 border w-1/2'>
        {cart.map((cartItem,index) => {
          return (
            <div key={index} className='flex justify-between border'>
              <img className='w-40' src={`/images/${cartItem.item.image}.jpg`} />
              <div>
                <h2>{cartItem.item.name}</h2>
                <h3>${cartItem.item.price}</h3>
              </div>
              <div className='flex justify-between'>
                <p>Quantity: {cartItem.quantity}</p>
                <div className='w-10 m-2'>
                  <button className='bg-amber-500 hover:bg-yellow-600 w-1/2 text-black py-[4px] rounded-lg font-bold' onClick={() => {removeFromCart(cartItem.item._id)}}>-</button>
                  <button className='bg-amber-500 hover:bg-yellow-600 w-1/2 text-black py-[4px] rounded-lg font-bold' onClick={() => {addtoCart(cartItem.item._id)}}>+</button>
                  </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default CheckoutCart