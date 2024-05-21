import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Landing/Home/Home";
import NavBar from "./components/Landing/NavBar/NavBar";
import Detalle from "./components/Detail/Detalle/Detalle";

function App() {
  return (
    <Router>
      <div className="b-">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detalle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;