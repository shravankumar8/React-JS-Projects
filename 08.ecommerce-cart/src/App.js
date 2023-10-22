import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginSignUp from "./pages/LoginSignup";
import Shopcategory from "./pages/ShopCategory";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Shopcategory category="mens" />} />
          <Route path="/womens" element={<Shopcategory category="womens" />} />
          <Route path="/kids" element={<Shopcategory category="kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
