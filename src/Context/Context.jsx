/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import allItems from "../assets/allItems";

const Context = createContext();

const getCart = () => {
  let cart = {};
  for (let idx = 0; idx < allItems.length; idx++) {
    cart[idx] = 0;
  }
  return cart;
};

function ContextProvider(props) {
  const [cartItems, setCartItems] = useState(getCart());

  function addToCart(itemId) {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment the item's quantity by 1
    }));
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function totalCartItems() {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const value = {
    allItems,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartItems,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
export { ContextProvider, Context };

/* setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Set default value to 0 if undefined
    }));
    console.log(cartItems); */

/* setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems); */
