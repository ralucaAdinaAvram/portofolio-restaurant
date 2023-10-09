import React, { ReactNode, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Menu from "./components/pages/Menu";

function App(): JSX.Element {
  return (
    <div className="container_app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
