/* eslint-disable react/prop-types */
// import Footer from "../component/Footer";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { Context } from "../Context/Context";

// import Item from "../component/Item";
import Navbar from "../component/Navbar";
import Items from "../component/Items";

const Category = (props) => {
  const { allItems } = useContext(Context);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="category-div">
        <div className="descrip">
          <img src={props.ban} />
          <div className="category-sort">
            <p>
              <span>Showing 1-16</span> out of 48products.
            </p>
          </div>
        </div>
        <div className="cat-items">
          {allItems.map((item, i) => {
            if (props.category === item.category) {
              return <Items key={i} props={item} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};
//src={item.src} price={item.pfurice}
export default Category;
