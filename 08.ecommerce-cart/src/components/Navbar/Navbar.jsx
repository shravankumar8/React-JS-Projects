import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [Menu,setMenu]=useState("")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}>Home {Menu==="home"?<hr/> : <></>}</li>
        <li onClick={()=>{setMenu("men")}}>Men  {Menu==="men"?<hr/> : <></>}</li>
        <li onClick={()=>{setMenu("women")}}>Women{Menu==="women"?<hr/> : <></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {Menu==="kids"?<hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar
