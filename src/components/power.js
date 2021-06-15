import React from 'react';
import './../scss/power.scss';
import Path0 from './../assets/images/illustrationPowered.png';
import Path7 from './../assets/images/planet8.png';
import Path8 from './../assets/images/planet7.png';

function Powered() {
  return (
    <section className="Powered">
      <div className="Powered__content">
        <h1 className="title">Powered By Liquid Network</h1>
        <p className="subTitle">
          By incentivizing instant liquidity onto the Liquid Network, truly
          rapid, low-cost, confidential confirmations and settlements become
          possible.
        </p>
      </div>
      <div className="Powered__grafic">
        <img src={Path7} className="planet7" rel="preload" alt="planet-img" />
        <img src={Path8} className="planet8" rel="preload" alt="planet-img" />
        <img
          src={Path0}
          className="PoweredBG"
          alt="backgroundIamge"
          rel="preload"
        />
      </div>
    </section>
  );
}

export default Powered;
