import React from 'react'
import arrow_icon from "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/components/Assets/breadcrum_arrow.png";
import "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/components/Breadcrums/Breadcrum.css";
function Breadcrums(props) {
    const {product}=props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrums
