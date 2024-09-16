/* eslint-disable react/prop-types */
// import Context from "../Context/Context.jsx";

import { Context } from "../Context/Context";
import { useContext } from "react";

const ProdDisplay = ({ props }) => {
  // const { product } = props.product;
  // const product = props.product || {};
  const { addToCart } = useContext(Context);
  /* if (!addToCart) {
    console.error();
    return null;
  } */
  return (
    <>
      <div className="proddisp">
        <div>
          <img src={props.src} alt="ff" />
          <p>{props.name}</p>
          <p>Price: {props.price}$</p>
          <button
            onClick={() => {
              addToCart(props.id);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
//

export default ProdDisplay;
