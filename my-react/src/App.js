import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Slider from "./pages/Slider/Slider";
import HiddenText from "./pages/HiddenText/HiddenText";
import Accordion from "./pages/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/hidden_text" element={<HiddenText />} />
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
