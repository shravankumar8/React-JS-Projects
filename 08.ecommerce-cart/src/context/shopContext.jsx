import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

// Create a context using createContext
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());
  
  const addToCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  
  const removeFromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  let  Totalsum=0;
  let quantity=0;
  all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            quantity += cartItems[e.id];
            const producttotal = e.new_price * cartItems[e.id];
            Totalsum += producttotal;}})
  console.log(Totalsum)
  const contextValue = { all_product,Totalsum, quantity,cartItems, addToCart, removeFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
