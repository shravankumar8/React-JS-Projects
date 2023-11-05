import React from 'react'
import "./Newcollection.css";
import collections from '../Assets/new_collections'
import Item from '../Item/Item'
const Newcollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr  className='hpt' />
      <div className='collections-item'>
        {collections.map((item,i)=>{
          return(
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        }) }
      </div>
    </div>
  )
}

export default Newcollections
