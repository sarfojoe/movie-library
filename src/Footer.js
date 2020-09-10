import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="row">
        &copy;{new Date().getFullYear()} Joseph Boadi | All rights reserved |
        Privacy
      </div>
    </div>
  );
};

export default Footer;
