import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'
import arrow from '../Assets/arrow-right-solid.svg'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offers For You </h1>
        <p>ONLY ON THE BEST SELLERS PRODUCTS</p>
        <button className="check-btn">
          Check Now <img src={arrow} alt="" />
        </button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
}

export default Offers
