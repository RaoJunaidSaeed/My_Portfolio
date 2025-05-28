// import React, { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">My Portfolio</div>

//       <ul className="nav-links" data-visible={menuOpen}>
//         <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
//         <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
//         <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
//         <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
//         <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
//         <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
//         <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
//       </ul>

//       {menuOpen ? (
//         <div className="close-icon" onClick={() => setMenuOpen(false)}>
//           <i className="fas fa-times"></i>
//         </div>
//       ) : (
//         <div className="menu-icon" onClick={() => setMenuOpen(true)}>
//           <i className="fas fa-bars"></i>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      setScrolled(window.scrollY > navHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">My Portfolio</div>

      <ul className="nav-links" data-visible={menuOpen}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {menuOpen ? (
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </div>
      ) : (
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <i className="fas fa-bars"></i>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
