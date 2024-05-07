import React from 'react'
import Layout from '../../components/layout/Layout'
import ShippingInfo from '../../components/shippingInfo/ShippingInfo'
import Totals from '../../components/totals/Totals'
import CardInfo from '../../components/cardInfo/CardInfo'
import CheckoutCart from '../../components/checkoutCart/CheckoutCart'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const {cart} = React.useContext(CartContext)
    return (
        <>
            <Layout>
                <ShippingInfo />
                <Totals />
                <CardInfo />
                <CheckoutCart />
            </Layout>
        </>
    )
}

export default Checkout