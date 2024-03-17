import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Components from "./components/compLib/Components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/compLib/Card";
import Buttoncomp from "./components/compLib/allComponents/Buttoncomp";
import ButtonUi from "./components/compLib/ButtonUi";
import Navui from "./components/compLib/Navui";
import DocComp from "./components/compLib/allComponents/DocComp";
import Docui from "./components/compLib/Docui";
import TextInput from "./components/compLib/allComponents/TextInput";

const App = () => {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Benefits />} />
          <Route path="/how-to-use" element={<Collaboration />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/DocUi" element={<Docui />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/ButtonUi" element={<ButtonUi />} />
          <Route path="/Navui" element={<Navui />} />
          <Route path="/TextInput" element={<TextInput />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </BrowserRouter>
  );
};

export default App;
