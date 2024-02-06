import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroHome from '../../components/Heros/HeroHome/HeroHome'
import CompaniesCarousel from '../../components/CompaniesCarousel/CompaniesCarousel'

const Home = () => {
  return (
    <Layout>
      <HeroHome/>
      <CompaniesCarousel/>
     
    </Layout>
  )
}

export default Home
