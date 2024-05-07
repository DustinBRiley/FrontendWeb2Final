import React from 'react'
import { CartContext } from '../../context/CartContext'
const { userId } = useContext(CartContext)

const result = await fetch("https://cord-nutritious-chasmosaurus.glitch.me/orders")
const temp = await result.json()
export const orders = temp.filter((order) => {return order.userId === userId})