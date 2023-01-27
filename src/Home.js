import React from 'react'
import styled from 'styled-components'
import FeatureProduct from './components/FeatureProduct'
import MainSection from './components/MainSection'
import Services from './components/Services'
import Trusted from './components/Trusted'

const Home = () => {
  const data={
    name:"SN Store"
  }
  return (
    <>
    <MainSection  data={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted />
    </>
  )
}



export default Home