import React, { useState } from 'react';
import './../scss/navbar.scss';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/logo.png';

// illustrationWelcome
// import { connect } from 'react-redux';
// import { getFilteredApartments } from '../../redux/filter/filter.actions';

function Navbar() {
  const [hamburgerActiv, setHamburgerActiv] = useState(false);

  const hamburgerOpen = () => {
    setHamburgerActiv(!hamburgerActiv);
  };

  return (
    <>
      <section className="menu">
        <div className="menu-container">
          <Link to="/" className="menu__logo">
            <img src={Logo} alt="logoImg" className="menu__logo" />
          </Link>
          <div className="menu__navigation">
            <Link to="/" className="menu__navigation__item">
              Home
            </Link>
            <a
              href="https://community.liquidao.io"
              rel="noreferrer"
              target="_blank"
              className="menu__navigation__item"
            >
              Community
            </a>
            <a
              href="https://blog.liquidao.io"
              rel="noreferrer"
              target="_blank"
              className="menu__navigation__item"
            >
              Blog
            </a>
            <Link
              to="/onepager.pdf"
              target="_blank"
              className="menu__navigation__item"
            >
              Governance
            </Link>
            <button className="menu__navigation__btn">
              <Link
                to="/whitepaper.pdf"
                target="_blank"
                style={{ color: 'white' }}
              >
                Whitepaper
              </Link>
            </button>
          </div>
          <div className="hamburger-mb-menu" onClick={hamburgerOpen}>
            <span
              className={!hamburgerActiv ? 'hamburger1' : 'hamburger11'}
            ></span>
            <span
              className={!hamburgerActiv ? 'hamburger2' : 'hamburger22'}
            ></span>
            <span
              className={!hamburgerActiv ? 'hamburger3' : 'hamburger33'}
            ></span>
          </div>

          <div
            className={hamburgerActiv ? 'menu-blok-active' : 'menu-blok'}
            onClick={hamburgerOpen}
          >
            <div
              className="menu-blok__container"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ul className="menu-blok__navigation">
                <li onClick={hamburgerOpen} className="menu-blok__item">
                  <Link to="/" className="menu-blok__link">
                    Home
                  </Link>
                </li>
                <li onClick={hamburgerOpen} className="menu-blok__item">
                  <a
                    href="https://community.liquidao.io"
                    rel="noreferrer"
                    target="_blank"
                    className="menu-blok__link"
                  >
                    Community
                  </a>
                </li>
                <li onClick={hamburgerOpen} className="menu-blok__item">
                  <a
                    href="https://blog.liquidao.io"
                    rel="noreferrer"
                    target="_blank"
                    className="menu-blok__link"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    to="/onepager.pdf"
                    target="_blank"
                    className="menu-blok__link"
                  >
                    Governance
                  </Link>
                </li>
              </ul>
              <Link
                to="/whitepaper.pdf"
                target="_blank"
                className="menu-blok__btn"
              >
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
