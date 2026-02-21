import Banner from "../layers/Banner";
import About from "./About";
import Contact from "./Contact";
import Marquri from "./Marquri";
import Protfolio from "./Protfolio";
import Services from "./Services";
import Testinomi from "./Testinomi";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Marquri />
      <About />
      <Services />
      <Protfolio />
      <Testinomi />
      <Contact />
    </div>
  );
};

export default Home;
