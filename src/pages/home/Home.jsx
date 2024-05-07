import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProducts/HomePageProducts'

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Category />
        <HomePageProductCard />
      </Layout>
    </>
  )
}

export default Home