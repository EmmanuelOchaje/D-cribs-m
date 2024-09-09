import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Latestcribs from "../component/Latestcribs";
import Latestints from "../component/Latestints";
import NewsLetter from "../component/NewsLetter";
import Offers from "../component/Offers";
// import Navbar from "../component/Navbar";

const Cribs = () => {
  return (
    <div>
      <Hero />
      <Latestcribs />
      <Offers />
      <Latestints />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cribs;
