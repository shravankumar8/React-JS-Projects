import React from 'react'
import Hero from '../components/Hero/Hero'
import Item from '../components/Item/Item'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/Newcollections/Newcollections'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import './home.css'


const shop = () => {
  return (
    <div className='maindiv'>
      <Hero />
      <Popular />
      < Offers/>
      <Newcollections />
      < Newsletter />
      < Footer/>
    </div>
  );
}

export default shop




