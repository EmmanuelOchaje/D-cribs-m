import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="lay">
      <div className="hero">
        <h1>Latest Cribs to Suit You,</h1>
        <p>Make your choice now!</p>
        <Link>
          <button>Click Here</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
