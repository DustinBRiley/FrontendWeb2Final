import React from 'react'
import Layout from '../../components/layout/Layout'
import ShippingInfo from '../../components/shippingInfo/ShippingInfo'
import Totals from '../../components/totals/Totals'
import CardInfo from '../../components/cardInfo/CardInfo'
import CheckoutCart from '../../components/checkoutCart/CheckoutCart'

const Checkout = () => {
    return (
        <>
            <Layout>
                <div className='bg-teal-900 w-screen'>
                    <h2 className='text-center text-2xl'>Checkout</h2>
                    <div className='flex justify-between w-screen'>
                        <ShippingInfo />
                        <Totals />
                    </div>
                    <div className='flex justify-between w-screen h-full'>
                        <CardInfo />
                        <CheckoutCart />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Checkout