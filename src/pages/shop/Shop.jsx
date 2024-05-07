import React from 'react'
import Layout from '../../components/layout/Layout'
import SearchBar from '../../components/searchBar/SearchBar'
import Filters from '../../components/filters/Filters'
import Items from '../../components/items/Items'
import Cart from '../../components/cart/Cart'
import { CartContext } from '../../context/CartContext'

const Shop = () => {
    const {cart} = React.useContext(CartContext)
    return (
        <>
            <Layout>
                <SearchBar />
                <Filters />
                <Items />
                <Cart />
            </Layout>
        </>
    )
}

export default Shop