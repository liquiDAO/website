import React from 'react';
import './../scss/MarketMaking.scss';
import MarketMakingBG from './../assets/images/illustration2.png';
import Path1 from './../assets/images/wplanet.png';
import Path3 from './../assets/images/planet3.svg';
import path4 from './../assets/images/planet4.png';
import Path5 from './../assets/images/planet5.svg';
import Path6 from './../assets/images/planet6.svg';

function MarketMaking() {
  return (
    <section className="MarketMaking">
      <div className="MarketMaking__content">
        <h1 className="title">Liquidity & Market Making</h1>
        <p className="subTitle">
          Creating an highly liquid, yield generating ecosystem to scale
          Bitcoin-enabled DeFi.
        </p>
      </div>
      <div className="MarketMaking__grafic">
        <img src={Path1} className="m-planet1" rel="preload" alt='plamet-img'/>
        <img src={Path3} className="m-planet3" rel="preload" alt='plamet-img'/>
        <img src={path4} className="m-planet4" rel="preload" alt='plamet-img'/>
        <img src={Path5} className="m-planet5" rel="preload" alt='plamet-img'/>
        <img src={Path6} className="m-planet6" rel="preload" alt='plamet-img'/>
        <img
          src={MarketMakingBG}
          className="MarketMakingBG"
          alt="MarketMakingIamge"
          rel="preload"
        />
      </div>
    </section>
  );
}

export default MarketMaking;
