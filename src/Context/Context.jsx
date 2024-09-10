/* eslint-disable react/prop-types */
import { createContext } from "react";
import allItems from "../assets/allItems";

export const Context = createContext(null);

function ContextProvider(props) {
  const value = { allItems };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
export default ContextProvider;
