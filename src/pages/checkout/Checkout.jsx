import React from 'react'
import Layout from '../../components/layout/Layout'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const {cart} = React.useContext(CartContext)
    return (
        <>
            <Layout>
                {/*
                <ShippingInfo />
                <Totals />
                <CardInfo />
                <CheckoutCart />
                */}
            </Layout>
        </>
    )
}

export default Checkout