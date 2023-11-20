import rmeoveicon from '../Assets/cart_cross_icon.png'
import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../context/shopContext'
const Cartitems = () => {
    const  { all_product,Totalsum, quantity,cartItems, removeFromCart }=useContext(ShopContext)
    
  
    return (
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
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
                  <p className="">${e.new_price * cartItems[e.id]}</p>

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
                {/* <p>total quantity</p> */}
                {/* <p>total price{Totalsim}</p> */}
              </div>
            );
          }
          else{
            return  null
          }
        })}
        <div className='cartitems-down'>
          <div className="cartitem-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p className='header-names'>Subtotal</p>
                <p>${Totalsum}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p className='header-names'>NO of items</p>
                <p>{quantity}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p className='header-names'>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total(After tax of 8%)</h3>
                <h3>${(8 / 100) * Totalsum + Totalsum}</h3>
              </div>
            </div>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocodes">
            <p>if you have a promo code ,Enter it here!</p>
            <div className="promobox">
              <input type="text" placeholder='Promocode' />
              <button type="submit">submit</button>
            </div>

          </div>
        </div>
      </div>
    );
}

export default Cartitems
