import React from 'react'
import Layout from '../../components/layout/Layout'
import { CartContext } from '../../context/CartContext'

const Shop = () => {
    const {cart} = React.useContext(CartContext)
    return (
        <>
            <Layout>
                {/*
                <SearchBar />
                <Filters />
                <Items />
                <Cart /> cart items list right side of shop screen
                */}
            </Layout>
        </>
    )
}

export default Shop