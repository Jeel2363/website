import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return(
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
};

export default App;