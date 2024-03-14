import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroHome from '../../components/Heros/HeroHome/HeroHome'
import HomeCard from '../../components/Cards/HomeCard/HomeCard'
import ClientContainer from '../../components/Carousels/CarouselClient/ClientContainer/ClientContainer'
import ExperienceCard from '../../components/Cards/ExperienceCard/ExperienceCard'

const Home = () => {
  return (
    <Layout>
      <HeroHome/>
      <HomeCard/>
      <ClientContainer/>
      <ExperienceCard/>
    </Layout>
  )
}

export default Home
