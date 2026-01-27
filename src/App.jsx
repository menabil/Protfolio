import { Route, Routes } from "react-router";
import "./App.css";
import Rootlayouts from "./components/layers/Rootlayouts";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Protfolio from "./components/pages/Protfolio";
import Services from "./components/pages/Services";
import Testinomi from "./components/pages/Testinomi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="protfolio" element={<Protfolio />} />
          <Route path="service" element={<Services />} />
          <Route path="testinomi" element={<Testinomi />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
