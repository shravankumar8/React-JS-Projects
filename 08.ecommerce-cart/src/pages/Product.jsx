import React, { useContext } from 'react'
import { ShopContext } from "../context/shopContext";
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/DescriptionBoxx/Description';
import Relatedproducts from '../components/Relatedproducts/Relatedproducts';
const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId))
  
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description product={product} />
      <Relatedproducts />
    </div>
  );
}

export default Product
