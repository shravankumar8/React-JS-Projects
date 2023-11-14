import React from "react";
import arrow_icon from "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/components/Assets/breadcrum_arrow.png";
import "./Breadcrums.css";
const Breadcrums = (props) => {
  const { product } = props;

  if (!product) {
    // Handle the case when product is not defined
    return <div>No product available</div>;
  }   

  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}
      <img src={arrow_icon} alt="" />
    </div>
  );
};

export default Breadcrums;
