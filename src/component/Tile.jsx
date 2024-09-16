/* eslint-disable react/prop-types */

const Tile = ({ props }) => {
  return (
    <div className="item">
      <div className="item-img">
        <img src={props.src} />
      </div>
      <p>Location: {props.location}</p>
      <p>
        Price:<span className="spn"> {props.price}$</span>
      </p>
      <p>
        ID:<span className="spn"> {props.id}</span>
      </p>
    </div>
  );
};
//"./images/image1.jpg"

export default Tile;
