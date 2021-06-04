import React from 'react';
import './../scss/noMatch.scss';
import { Link } from 'react-router-dom';
import astronaut from './../assets/images/astronaut.png';
import Path1 from './../assets/images/wplanet.png';
import Path2 from './../assets/images/illustrationPowered.png';

function NoMatch() {
  return (
    <>
      <section id="error-404">
        <img src={Path2} className="error-bg" alt="ice__landshaft" />
        <img src={Path1} className="error-planet" alt="planet-img" />
        <div className="error-404-contnent">
          <img src={astronaut} alt="astronaut-img" className="astronaut-img" />
          <h1 className="error__title">Looks like You’re lost in space</h1>
          <h1 className="error-404__title">404</h1>
          <Link className="error-404__btn" to="/">
            Home Page
          </Link>
        </div>
      </section>
    </>
  );
}

export default NoMatch;
