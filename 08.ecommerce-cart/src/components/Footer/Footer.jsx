import React from 'react'
import './Footer.css'
import Footerlogo from '../Assets/logo_big.png'
import Instagram from '../Assets/instagram_icon.png'
import Pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <hr className="hkr" />
      <div className="footerlogo">
        <img src={Footerlogo} alt="" />
        <p>Shopper</p>
      </div>
      <div className="footerlinks">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="sociallinks">
        <img src={Instagram} alt="" />
        <img src={Pintrest} alt="" />
        <img src={whatsapp} alt="" />
      </div>
      <hr className="hkr" />
      <p className="regulations"> Copyright @ 03 -ALL RIGHTS RESERV</p>
    </div>
  );
}

export default Footer
