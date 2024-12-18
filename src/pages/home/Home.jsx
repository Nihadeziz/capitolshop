import React from 'react'
import Layout from '../../components/layout/Layout'
import SectionOne from './components/sectionOne/SectionOne'
import SectionTwo from './components/sectionTwo/SectionTwo'
import Trending from './components/trending/Trending'
import SectionThree from './components/sectionThree/SectionThree'

const Home = () => {
  return (
    <div>

      <Layout>
        <SectionOne/>
        <SectionTwo/>
        <Trending/>
        <SectionThree/>
      </Layout>
    </div>
  )
}

export default Home