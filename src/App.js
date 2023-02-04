import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Business from "./Pages/Business";
import Entertainment from "./Pages/Entertainment";
import Health from "./Pages/Health";
import Science from "./Pages/Science";
import { ContextProvider } from "./Context/ContextProvider";
import { useState } from "react";
import About from "./Pages/About";

function App() {
  const [data, setData] = useState("");

  return (
    <ContextProvider.Provider value={{ data, setData }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} cat="general" />
          <Route path="/general" element={<Categories />} cat="general" />
          <Route path="/business" element={<Business />} cat="business" />
          <Route
            path="/general"
            element={<Entertainment />}
            cat="entertainment"
          />
          <Route path="/general" element={<Health />} cat="health" />
          <Route path="/general" element={<Science />} cat="science" />
        </Routes>
      </Router>
    </ContextProvider.Provider>
  );
}

export default App;
