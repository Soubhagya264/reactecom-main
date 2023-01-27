import React from 'react';
import {NavLink} from "react-router-dom";
import FormatPrice from '../Helper/FormatPrice';
import { useFilterContext } from '../context/filter_context';

const Product = (curElem) => {
   
  const {id,title,image,price,category}=curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
       <div className="card">
        <figure>
            <img src={image} alt="product"></img>
            <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
           <div className="card-data-flex">
            <h4>{title}</h4>
            <p className="card-data--price"><FormatPrice price={price}></FormatPrice> </p>
           </div>

        </div>
       </div>
    </NavLink>
    )
  
}

export default Product;
