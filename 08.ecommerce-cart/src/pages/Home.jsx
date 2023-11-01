import React from 'react'
import Hero from '../components/Hero/Hero'
import Item from '../components/Item/Item'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/Newcollections/Newcollections'


const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      < Offers/>
      <Newcollections />
    </div>
  );
}

export default shop




