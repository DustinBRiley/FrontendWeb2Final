import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const {cart, addtoCart, removeFromCart} = React.useContext(CartContext)
  return (
    <div className='bg-teal-900 w-1/3 h-full'>
      <div className='border w-full'>
        <h2 className='text-center'>Your Cart</h2>
        {cart.map((cartItem,index) => {
          return (
            <div key={index}>
              <img className='w-20' src={`/images/${cartItem.item.image}.jpg`} />
              <div>
                <h2>{cartItem.item.name}</h2>
                <h3>${cartItem.item.price}</h3>
              </div>
              <div className='flex justify-between'>
                <p>Quantity: {cartItem.quantity}</p>
                <div className='w-10'>
                  <button className='bg-amber-500 hover:bg-yellow-600 w-1/2 text-black py-[4px] rounded-lg font-bold' onClick={() => {removeFromCart(cartItem.item._id)}}>-</button>
                  <button className='bg-amber-500 hover:bg-yellow-600 w-1/2 text-black py-[4px] rounded-lg font-bold' onClick={() => {addtoCart(cartItem.item._id)}}>+</button>
                  </div>
              </div>
            </div>
          )
        })}
        <button className='bg-amber-500 hover:bg-yellow-600 w-full text-black py-[4px] rounded-lg font-bold'
        onClick={()=>navigate("/Checkout")}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart