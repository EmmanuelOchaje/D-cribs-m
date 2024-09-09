import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <h2 onClick={() => setMenu("")} className="header">
            D-cribs.
          </h2>
        </Link>
      </div>
      <div>
        <ul>
          <li onClick={() => setMenu("houses")}>
            <Link to="/houses" className={menu === "houses" ? "active" : ""}>
              Houses
            </Link>
          </li>
          <li onClick={() => setMenu("interior")}>
            <Link
              to="/interior"
              className={menu === "interior" ? "active" : ""}
            >
              Interior
            </Link>
          </li>
          <li onClick={() => setMenu("exterior")}>
            <Link
              to="/exterior"
              className={menu === "exterior" ? "active" : ""}
            >
              Exterior
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <ul>
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src="./images/cart.png" />
              <div className="count">0</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
