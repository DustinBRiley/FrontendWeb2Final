import React from 'react'

const result = await fetch("https://cord-nutritious-chasmosaurus.glitch.me/items")
const items = await result.json()

export const CartContext = React.createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])
    const [total,setTotal] = React.useState(0)


    const addtoCart = (_id) => {
        let index = cart.findIndex((el) => el.item._id === _id)
        if(index === -1) { // not in cart add to cart
            for(let i=0;i<items.length;i++) {
                if(items[i]._id === _id) {
                    setTotal((prev) => (prev += items[i].price))
                    setCart([...cart,{item: items[i], quantity: 1}])
                    console.log(total)
                }
            }
        } else { // in cart find it and ++
            const arr = cart.map((cartItem, i) => {
                if(i === index) {
                    cartItem.quantity++
                    console.log(total)
                    return cartItem
                } else {
                    return cartItem
                }
            })
            setTotal((prev) => (prev += cart[index].item.price))
            console.log(total)
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
            setTotal((prev) => (prev -= cart[index].item.price))
            console.log(total)
            setCart(arr)
        } else {
            setTotal((prev) => (prev -= cart[index].item.price))
            console.log(total)
            const arr = cart.filter(a => a.item._id !== _id)
            setCart(arr)
        }
    }

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [userId, setUserId] = React.useState("")
    const [search, setSearch] = React.useState("")
    const [addressSet, setAddressSet] = React.useState(false)
    const [cardSet, setCardSet] = React.useState(false)

    return (
        <CartContext.Provider value={{
            cart, setCart, addtoCart, removeFromCart,
            total, setTotal,
            userId, setUserId,
            username, setUsername,
            password, setPassword,
            search, setSearch,
            addressSet, setAddressSet,
            cardSet, setCardSet
            }}>
            {children}
        </CartContext.Provider>
    )
}