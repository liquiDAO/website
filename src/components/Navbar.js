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
            <Link to="/" className="menu__navigation__item">
              Comunity
            </Link>
            <Link to="/" className="menu__navigation__item">
              Blog
            </Link>
            <Link to="/" className="menu__navigation__item">
              Governance
            </Link>
            <button className="menu__navigation__btn">Go to App</button>
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
                  <Link to="/aboutus" className="menu-blok__link">
                    About
                  </Link>
                </li>
                <li onClick={hamburgerOpen} className="menu-blok__item">
                  <Link to="/partners" className="menu-blok__link">
                    Partners
                  </Link>
                </li>
                <li onClick={hamburgerOpen} className="menu-blok__item">
                  <Link to="/contacts" className="menu-blok__link">
                    Contacts
                  </Link>
                </li>
                <li onClick={hamburgerOpen} className="menu-blok__item">
                  <Link to="/faq" className="menu-blok__link">
                    FAQ
                  </Link>
                </li>
              </ul>
              <Link to="/" className="menu-blok__btn">
                Go to App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
