import rmeoveicon from '../Assets/cart_cross_icon.png'
import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../context/shopContext'
const Cartitems = () => {
    const  { all_product, cartItems,  removeFromCart }=useContext(ShopContext)
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>TItle</p>
        <p>Price</p>
        <p>quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
    
      {all_product.map((e)=>{
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="cart-product-icon " alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p className="">{e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  src={rmeoveicon}
                  className="remove-icon"
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Cartitems
