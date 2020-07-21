import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://icon-library.com/images/netflix-icon-png/netflix-icon-png-3.jpg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.kym-cdn.com/photos/images/original/001/701/568/0db.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
