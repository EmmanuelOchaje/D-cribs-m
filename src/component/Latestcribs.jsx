import data from "../assets/items";
import Item from "./Item";
const Latestcribs = () => {
  return (
    <div className="latest">
      <div className="latest-item">
        {data.map((data, idx) => (
          <Item props={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Latestcribs;
