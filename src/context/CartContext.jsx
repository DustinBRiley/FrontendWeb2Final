import React from 'react'


export const CartContext = React.createContext()
export const CartProvider = ({children}) => {
    const {cart, setCart} = React.useState([])

    const addtoCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem._id === item._id)
        if(existingItem) {
            setCart(
                cart.map((cartItem) => (cartItem._id === item._id)
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            ))
        } else {
            setCart([...cart, {...item,quantity: 1}])
        }
        console.log(cart)
    }

    const {userId, setUserId} = React.useState()

    const login = async (username, password) => {
        const result = await fetch("https://cord-nutritious-chasmosaurus.glitch.me/users")
        const users = await result.json()

        const user = users.find((user) => user.username === username)
        if(user.password === password) {
            setUserId(user._id)
        }
    }

    const register = async (username, password) => {
        const result = await fetch("https://cord-nutritious-chasmosaurus.glitch.me/users")
        const users = await result.json()

        const user = users.find((user) => user.username === username)
        if(!user) {
            const user = {
                username: username,
                password: password
            }
            await fetch("https://cord-nutritious-chasmosaurus.glitch.me/users", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            return true
        } else {
            return false
        }
    }

    return (
        <CartContext.Provider value={{cart, addtoCart, userId, login, register}}>
            {children}
        </CartContext.Provider>
    )
}