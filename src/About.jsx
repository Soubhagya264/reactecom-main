import React from 'react';
import styled from 'styled-components';
import MainSection from './components/MainSection';
import { useLocation } from 'react-router-dom';


const About = () => {
 

  const data={
    name:"SN Ecommerce",
  }
  return (
    <Wrapper>
      <MainSection data={data}/>
    </Wrapper>
  );
}

const Wrapper= styled.section`
   height:100vh;
   background-color: ${({theme})=>theme.colors.bg} ;
  
  `

export default About;
