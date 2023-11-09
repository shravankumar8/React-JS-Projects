import React, { useContext } from 'react'
import "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/pages/stylesheets/ShopCategory.css";
import { ShopContext } from "../context/shopContext";
import dropdown from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexshort">
        <p>
          <span>showing 1-12 pout of 36 products</span>
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category == item.category) {
            return (
              <>
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </>
            );
          } else {
            return null;
          }
        })}
      </div>
      <button className='loadmore'>Explore More</button>
    </div>
  );
}

export default ShopCategory;
