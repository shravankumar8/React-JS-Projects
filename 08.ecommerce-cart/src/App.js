import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginSignUp from "./pages/LoginSignup";
import ShopCategory from "./pages/ShopCategory";

import Product from "./pages/product";
import kids_banner from "./components/Assets/banner_kids.png"
import  mens_banner from "./components/Assets/banner_mens.png"
import womens_banner from "./components/Assets/banner_women.png"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ShopCategory  banner={mens_banner} category="men" />} />
          <Route path="/womens"  element={<ShopCategory banner={womens_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kids_banner}category="kid" />} />
          <Route path="/product" element={<Product />} >
             <Route path=":productId" element={<Product />} />
          </Route>
         
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>

      </BrowserRouter>
      < Footer/>
    </div>
  );
}

export default App;
