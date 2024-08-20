import React from 'react';
import './footer.css'; // Ensure you have the corresponding CSS for styling
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h5>About Us</h5>
          <p>
          We are a company dedicated to providing top-notch services and products. Our mission is to deliver exceptional value and quality to our customers..
          </p>
        </div>

        <div className="footer-section contact">
          <h5>Contact Us</h5>
          <ul>
            <li><AiFillHome /> #9-14-1, Flat No.301 & 302 2nd Floor,

Kotu Empire, VIP Road, Siripuram

Visakhapatnam 

Andhra Pradesh 530003</li>
            <li><MdEmail /> <a href="mailto:info@example.com">info@datapro.in</a></li>
            <li><MdPhone /> 0891-2707227 , 0891-2507227, 9573388833</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/dataprocomputersofficial" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://x.com/dataproofficial" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
            <a href="https://www.instagram.com/dataprocomputersofficial" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/datapro-computers-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
      <p>© 2024 Datapro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
