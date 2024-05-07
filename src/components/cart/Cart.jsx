import React from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const {cart} = React.useContext(CartContext)
  return (
    <div>
        {/* cart list of items right side of shop screen .map{CartItem}
        might add buttons to + or - items */}
    </div>
  )
}

export default Cart