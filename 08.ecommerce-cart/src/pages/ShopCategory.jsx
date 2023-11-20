import React, { useContext } from "react";
import "./stylesheets/ShopCategory.css";
import { ShopContext } from "../context/shopContext";
import dropdown from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexshort">
        <p>
          <span>showing 1-12 out of 36 products</span>
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter((item) => props.category === item.category)
          .map((item) => (
            <Item
              key={item.id} // Use the product's ID as the key
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <button className="loadmore">Explore More</button>
    </div>
  );
};

export default ShopCategory;
