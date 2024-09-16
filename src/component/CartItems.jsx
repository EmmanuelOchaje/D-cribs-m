import { useContext } from "react";
import { Context } from "../Context/Context";
// import allItems from "../assets/allItems";

const CartItems = () => {
  const { allItems, cartItems, removeFromCart } = useContext(Context);
  return (
    <div>
      {allItems.map((e, idx) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={idx} className="cart-items">
              <div className="mapped">
                <img src={e.src} />
                <p>
                  <span>{e.name}</span>
                </p>
                <p>
                  <span>{e.price}</span>
                </p>
                <p>Quantity: {cartItems[e.id]}</p>
                <button onClick={() => removeFromCart(e.id)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
