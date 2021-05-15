import React from 'react';
import './../scss/footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="join-us__title">Our partners</h2>
      <div className="footer__navbar">
        <Link to="/" className="footer__navbar__link">
          About Us
        </Link>
        <Link to="/" className="footer__navbar__link">
          blog
        </Link>
        <Link to="/" className="footer__navbar__link">
          Contact Us
        </Link>
        <Link to="/aaa" className="footer__navbar__link">
          Sell Bitcoin/ Giftcard
        </Link>
        <Link to="/faq" className="footer__navbar__link">
          FAQ
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
