import data from "../assets/Ints";
import Item from "./Item";

const Latestints = () => {
  return (
    <div>
      <div className="latest">
        <div className="latest-item">
          {data.map((data, idx) => (
            <Item props={data} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestints;
