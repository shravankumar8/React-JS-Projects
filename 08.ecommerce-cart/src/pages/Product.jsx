import React, { useContext } from 'react'
import { ShopContext } from "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/context/shopContext.jsx";
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId))
  
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product
