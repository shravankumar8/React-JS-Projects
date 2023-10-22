import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setActiveMenu("Home")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>{" "}
          {activeMenu === "Home" ? <hr /> : null}
        </li>
        <li onClick={() => setActiveMenu("Mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Mens
          </Link>{" "}
          {activeMenu === "Mens" ? <hr /> : null}
        </li>
        <li onClick={() => setActiveMenu("Womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Womens
          </Link>{" "}
          {activeMenu === "Womens" ? <hr /> : null}
        </li>
        <li onClick={() => setActiveMenu("Kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {activeMenu === "Kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link
            style={{ textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        </button>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
