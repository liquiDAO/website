import React from 'react';
import './../scss/welcome.scss';
import WelcomeBG from './../assets/images/illustrationWelcome.png';
import MailInp from './../components/mailInp';
import Path1 from './../assets/images/wplanet.png';
import Path2 from './../assets/images/wplanet2.svg';
import Path3 from './../assets/images/yellowStar.svg';
import Path4 from './../assets/images/redStar.svg';
import Path5 from './../assets/images/blueStar.svg';
import Path6 from './../assets/images/whiteStar.svg';

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__content">
        <h1 className="title">Decentralized finance on BITCOIN</h1>
        <p className="subTitle">
          Unlocking a permissionless alternative to centralized banking, powered
          by the world's largest blockchain.
        </p>
        <h2 className="join-us__title">JOIN US</h2>
        <MailInp />
      </div>

      <div className="welcome__grafic">
        <img src={Path1} className="w-Pnalet1" rel="preload" alt="planet-img" />
        <img src={Path2} className="w-Pnalet2" rel="preload" alt="planet-img" />
        <img
          src={Path3}
          className="w-Pnalet3"
          rel="preload"
          alt="start-yellow-img"
        />
        <img
          src={Path4}
          className="w-Pnalet4"
          rel="preload"
          alt="start-red-img"
        />
        <img
          src={Path5}
          className="w-Pnalet5"
          rel="preload"
          alt="start-blue-img"
        />
        <img
          src={Path6}
          className="w-Pnalet6"
          rel="preload"
          alt="start-white-img"
        />
        <img
          src={Path6}
          className="w-Pnalet7"
          rel="preload"
          alt="start-white-img"
        />
        <img
          src={Path4}
          className="w-Pnalet8"
          rel="preload"
          alt="start-red-img"
        />
        <img
          src={WelcomeBG}
          className="WelcomeBG"
          alt="backgroundIamge"
          rel="preload"
        />
      </div>
    </section>
  );
}

export default Welcome;
