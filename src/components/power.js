import React from 'react';
import './../scss/power.scss';
import { ReactComponent as Path0 } from './../assets/images/illustrationPowered.svg';
import { ReactComponent as Path7 } from './../assets/images/planet7.svg';
import { ReactComponent as Path8 } from './../assets/images/planet8.svg';

function Powered() {
  return (
    <section className="Powered">
      <div className="Powered__content">
        <h1 className="title">Powered By Liquid Network</h1>
        <p className="subTitle">
          A Bitcoin Layer 2 Network that allows for rapid, low-cost, confidential transactions and digital asset settlements.
        </p>
      </div>
      <div className="Powered__grafic">
        <Path7 className="planet7" rel="preload" />
        <Path8 className="planet8" rel="preload" />
        <Path0 className="PoweredBG" alt="backgroundIamge" rel="preload" />
      </div>
    </section>
  );
}

export default Powered;
