import React from 'react'
import Layout from '../../components/layout/Layout'
import OrderHistory from '../../components/orderHistory/OrderHistory'

const Account = () => {
    return (
        <>
        <Layout>
            <h1 className='text-lg text-center'>Your Order History</h1>
            <OrderHistory />
        </Layout>
        </>
    )
}

export default Account