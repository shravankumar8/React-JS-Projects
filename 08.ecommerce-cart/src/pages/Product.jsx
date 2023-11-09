import React,{useContext} from 'react'
import { ShopContext } from  "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/context/shopContext.jsx"
import { useParams } from 'react-router-dom'

const Product = () => {
  const {all_produt}=useContext(shopcontext)
  const { ProductId } = useParams();
  const product =all_produt.find((e)=>{e.id === Number(ProductId)})
  return (
    <div>
     
    </div>
  )
}

export default Product
