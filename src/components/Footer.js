import React from 'react';
import './../scss/footer.scss';
import { Link } from 'react-router-dom';
import onionLogo from './../assets/images/onion.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__navbar">
        <a
          href="https://github.com/liquiDAO/community"
          rel="noreferrer"
          target="_blank"
          className="footer__navbar__link"
        >
          Community
        </a>
        <a
          href="https://blog.liquidao.io"
          rel="noreferrer"
          target="_blank"
          className="footer__navbar__link"
        >
          Blog
        </a>
        <a
          href="https://matrix.to/#/#liquidao:matrix.org?via=matrix.org"
          rel="noreferrer"
          target="_blank"
          className="footer__navbar__link"
        >
          {` `}
          Join the Matrix channel
        </a>
        <Link
          to="/whitepaper.pdf"
          target="_blank"
          className="footer__navbar__link"
        >
          Whitepaper
        </Link>
        <Link to="/faq" className="footer__navbar__link">
          FAQ
        </Link>
        <Link to="/roadmap" className="footer__navbar__link">
          Roadmap
        </Link>
        <a
          href="http://2eubwcpqnbiucaohqedrpugx5l7yuphxdgg2ufnp7xontxpylcjmvnyd.onion"
          rel="noreferrer"
          target="_blank"
          className="footer__navbar__link"
        >
          <img src={onionLogo} height="16px" alt="onion hidden service" />
          {` `}
          Onion V3
        </a>
      </div>
    </footer>
  );
}

export default Footer;
