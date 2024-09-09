import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>D-Cribs</h1>
        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Products</li>
          <li>Offices</li>
          <li>Contact</li>
        </ul>
        <p>
          <span className="ig">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
        </p>
      </div>
      {/* <ul>
        <li>Socials</li>
      </ul> */}
    </div>
  );
};

export default Footer;
