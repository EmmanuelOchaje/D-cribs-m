import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { totalCartItems } = useContext(Context);

  return (
    <div className="nav">
      <div>
        <Link to="/">
          <h2 onClick={() => setMenu("")} className="head">
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
          <li onClick={() => setMenu("furniture")}>
            <Link
              to="/furniture"
              className={menu === "furniture" ? "active" : ""}
            >
              Furniture
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
              <img src="/src/assets/images/cart.png" />
              <div className="count">{totalCartItems()}</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
