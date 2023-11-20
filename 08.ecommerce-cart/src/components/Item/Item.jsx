import React from "react";
import {Link }from 'react-router-dom'
import './Item.css'


const Item = (props) => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
      });
    };
  return (
    <div className="Item" onClick={scrollToTop}>
      <Link to={`/Product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}books</p>
      <div className="item-prices">
        <div className="item-price-new">$ {props.new_price}</div>
        <div className="item-old-price">$ {props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
