import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../../Assets/cart_icon.png";
import logo from "../../Assets/alien.png";
import "./Navbar.css";
function Navbar() {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="company logo" />
        <Link className="link" to="/">
          <p
            onClick={() => {
              setMenu("");
            }}
          >
            HKDR
          </p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link className="link" to="/">
            Shop
          </Link>{" "}
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link className="link" to="/men">
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link className="link" to="/women">
            Women
          </Link>{" "}
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link className="link" to="/kid">
            Kid
          </Link>{" "}
          {menu === "kid" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link className="link" to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart logo" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
export default Navbar;
