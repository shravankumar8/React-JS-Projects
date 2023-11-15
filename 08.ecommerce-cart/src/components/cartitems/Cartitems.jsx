import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../context/shopContext'
const Cartitems = () => {
    const  { all_product, cartItems, addToCart, removeFromCart }=useContext(ShopContext)
  return <div className="cartitems">
    cartitems
  </div>;
}

export default Cartitems
