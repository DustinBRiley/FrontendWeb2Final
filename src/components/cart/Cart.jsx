import React from 'react'
import CartItem from "./cartItem/CartItem.jsx"
const Cart = () => {
  return (
    <div>
        {/* cart list of items right side of shop screen .map{CartItem}
        might add buttons to + or - items */}
        <CartItem />
    </div>
  )
}

export default Cart