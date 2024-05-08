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
                <div className='flex justify-between bg-teal-900'>
                    <Items />
                    <Cart />
                </div>
            </Layout>
        </>
    )
}

export default Shop