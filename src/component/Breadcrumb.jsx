/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      Home
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      Shop
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      {product.id}
    </div>
  );
};

export default Breadcrumb;
