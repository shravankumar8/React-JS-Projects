import React,{useContext} from 'react'
import { ShopContext } from  "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/context/shopContext.jsx"
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums'

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = all_product.find((e) => {
    e.id === Number(ProductId);
  });
  return (
    <div>
     <Breadcrums product={product}/>
    </div>
  )
}

export default Product;
