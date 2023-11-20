import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/Newcollections/Newcollections'
import Newsletter from '../components/Newsletter/Newsletter'
import "./stylesheets/home.css";


const shop = () => {
  return (
    <div className='maindiv'>
      <Hero />
      <Popular />
      < Offers/>
      <Newcollections />
      < Newsletter />
    </div>
  );
}

export default shop




