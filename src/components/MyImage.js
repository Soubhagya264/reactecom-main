import React, { useState } from "react";
import styled from "styled-components";


const MyImage = ({image=[{url:""}]}) => {
  
  return (
    <Wrapper>
    <div className="grid">
        <div className="main-screen">
            <img src={image} className="box-image--style"></img>
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    img {
      max-width: 300px !important;
      max-height: 300px !important;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    img {
      max-width: 200px;
      height:200px ;
      }
   
    order: 1;
`;

export default MyImage