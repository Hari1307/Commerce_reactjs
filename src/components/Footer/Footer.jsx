import React from "react";
import insta_icon from "../../Assets/instagram_icon.png";
import alien from "../../Assets/alien.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={alien} alt="foot-imm" />
        <p>HKDR</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Producst</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved. </p>
      </div>
    </div>
  );
};
