import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroHome from '../../components/Heros/HeroHome/HeroHome'
import CompaniesCarousel from '../../components/CompaniesCarousel/CompaniesCarousel'
import HomeCard from '../../components/Cards/HomeCard/HomeCard'
import Slide from '../../components/Carousels/CarouselHome/Slide/Slide'


const Home = () => {
  return (
    <Layout>
      <HeroHome/>
      <CompaniesCarousel/>
      <HomeCard/>
      <div style={{height:"500px"}}> 
      </div>
     
    </Layout>
  )
}

export default Home
