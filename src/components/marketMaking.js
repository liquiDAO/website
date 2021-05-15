import React from 'react';
import './../scss/MarketMaking.scss';
import MarketMakingBG from './../assets/images/illustration2.png';
import { ReactComponent as Path1 } from './../assets/images/wplanet.svg';
import { ReactComponent as Path3 } from './../assets/images/planet3.svg';
import { ReactComponent as Path4 } from './../assets/images/planet4.svg';
import { ReactComponent as Path5 } from './../assets/images/planet5.svg';
import { ReactComponent as Path6 } from './../assets/images/planet6.svg';

function MarketMaking() {
  return (
    <section className="MarketMaking">
      <div className="MarketMaking__content">
        <h1 className="title">Decentralized finance on BITCOIN</h1>
        <p className="subTitle">
          Unlocking a permissionless alternative to centralized banking, powered
          by the world's largest blockchain.
        </p>
      </div>
      <div className="MarketMaking__grafic">
        <Path1 className="m-planet1" rel="preload" />
        <Path3 className="m-planet3" rel="preload" />
        <Path4 className="m-planet4" rel="preload" />
        <Path5 className="m-planet5" rel="preload" />
        <Path6 className="m-planet6" rel="preload" />
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
