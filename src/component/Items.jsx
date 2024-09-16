/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Items({ props }) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <div className="item-img">
          <img src={props.src} />
        </div>
      </Link>
      {/* <p>Location: {props.location}</p> */}
      <p>
        Price:<span className="spn"> {props.price}$</span>
      </p>
      {/* <p>
        ID:<span className="spn"> {props.id}</span>
      </p> */}
    </div>
  );
}
