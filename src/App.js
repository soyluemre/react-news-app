import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Business from "./Pages/Business";
import Entertainment from "./Pages/Entertainment";
import Health from "./Pages/Health";
import Science from "./Pages/Science";
import { ContextProvider } from "./Context/ContextProvider";
import { useState } from "react";
import About from "./Pages/About";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState("");

  return (
    <ContextProvider.Provider value={{ data, setData }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider.Provider>
  );
}

export default App;
