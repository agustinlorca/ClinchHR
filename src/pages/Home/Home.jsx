import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroHome from '../../components/Heros/HeroHome/HeroHome'
import HomeCard from '../../components/Cards/HomeCard/HomeCard'
import ClientContainer from '../../components/Carousels/CarouselClient/ClientContainer/ClientContainer'

const Home = () => {
  return (
    <Layout>
      <HeroHome/>
      <ClientContainer/>
      <HomeCard/>
    </Layout>
  )
}

export default Home
