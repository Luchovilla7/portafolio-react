import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Luciano Villalba</h1>
        <p>Code is Fun🚀</p>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <p>Y manos a la obra.</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Luciano Villalba</div>
        <div className="sns-links">
          <a href="https://linkedin.com/in/luciano-villalba-dev" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://wa.link/2lddly" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;