import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll(); // 👈 Enables smooth scrolling

  return (
    <div className="body-full">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
