// import allItems from "../assets/allItems";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import { Context } from "../Context/Context";
import Navbar from "../component/Navbar";
import ProdDisplay from "../component/ProdDisplay";

const Product = () => {
  const { allItems } = useContext(Context);
  const { productId } = useParams();
  const product = allItems.find((e) => Number(e.id) === Number(productId));

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Breadcrumb product={product} />
      <ProdDisplay props={product} />
    </div>
  );
};

export default Product;
