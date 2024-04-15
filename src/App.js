import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Product } from "./Pages/Product";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import mens_banner from "./Assets/banner_mens.png";
import womens_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={womens_banner} category="women" />}
          />
          <Route
            path="/kid"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
