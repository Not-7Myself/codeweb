import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="https://www.instagram.com/codeclubapj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/codeclubapjn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-discord"></i>
        </a>
      </div>
      <p>CODE Club 2k24</p>
    </footer>
  );
};

export default Footer;
