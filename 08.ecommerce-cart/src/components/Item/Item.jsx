import React from "react";
import {Link }from 'react-router-dom'
import './Item.css'
import pic from '../Assets/p1_product_i1.png'

const Item = (props) => {
  return (
    <div className="Item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}books</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-old-price">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
