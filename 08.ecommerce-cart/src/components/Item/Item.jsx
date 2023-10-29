import React from "react";
import './Item.css'
import pic from '../Assets/p1_product_i1.png'

const Item = (props) => {
  return (
    <div className="Item">
      <img src={props.image} alt="" />
      <p>{props.name}books</p>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_price}234
        </div>
        <div className="item-old-price">
          {props.old_price}344
        </div>
      </div>
    </div>
  );
};

export default Item;
