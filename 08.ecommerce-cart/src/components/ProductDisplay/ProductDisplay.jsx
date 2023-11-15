import React, { useContext } from "react";
import "./ProductDisplay.css";
import staricon from '../Assets/star_icon.png'
import stardullicon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../context/shopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart,removeFromCart}=useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={stardullicon} alt="" />
          <p>{"(112)"}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="product-right-price-old">$ {product.old_price} </div>
          <div className="product-right-price-new">$ {product.new_price} </div>
        </div>
        <div className="product-description">{product.description}</div>
        <div className="productsizes">
          <h1>Select Size</h1>
          <div className="productdisplay-sizes">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XX1</p>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="addtocart">ADD TO CART</button>
        <div  className="tags">
          <p className="productdisplay-category">
            <span>Sategory : </span>
            {product.category} , Tshirt , Shirt
          </p>
          <p className="productdisplay-tags">
            <span>Tages : </span>Modern , Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
