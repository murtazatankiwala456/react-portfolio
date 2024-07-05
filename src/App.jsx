import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
