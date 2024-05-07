import React from 'react'
import Layout from '../../components/layout/Layout'
import Searchbar from '../../components/searchbar/Searchbar'
import Items from '../../components/items/Items'
import Cart from '../../components/cart/Cart'

const Shop = () => {
    return (
        <>
            <Layout>
                <Searchbar />
                <Items />
                <Cart />
            </Layout>
        </>
    )
}

export default Shop