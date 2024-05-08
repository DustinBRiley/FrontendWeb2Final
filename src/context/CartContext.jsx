import React from 'react'

const result = await fetch("https://cord-nutritious-chasmosaurus.glitch.me/items")
const items = await result.json()

export const CartContext = React.createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    const addtoCart = (_id) => {
        let index = cart.findIndex((el) => el.item._id === _id)
        if(index === -1) { // not in cart add to cart
            for(let i=0;i<items.length;i++) {
                if(items[i]._id === _id) {
                    setCart([...cart,{item: items[i], quantity: 1}])
                }
            }
        } else { // in cart find it and ++
            const arr = cart.map((cartItem, i) => {
                if(i === index) {
                    cartItem.quantity++
                    return cartItem
                } else {
                    return cartItem
                }
            })
            setCart(arr)
        }
    }

    const removeFromCart = (_id) => {
        let index = cart.findIndex((el) => el.item._id === _id)
        if(cart[index].quantity > 1) {
            const arr = cart.map((cartItem, i) => {
                if(i === index) {
                    cartItem.quantity--
                    return cartItem
                } else {
                    return cartItem
                }
            })
            setCart(arr)
        } else {
            const arr = cart.filter(a => a.item._id !== _id)
            setCart(arr)
        }
    }

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [userId, setUserId] = React.useState("")
    const [search, setSearch] = React.useState("")

    return (
        <CartContext.Provider value={{cart, addtoCart, removeFromCart, userId, setUserId, username, setUsername, password, setPassword, search, setSearch}}>
            {children}
        </CartContext.Provider>
    )
}