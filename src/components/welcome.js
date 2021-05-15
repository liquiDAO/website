import React from 'react';
import './../scss/welcome.scss';
import WelcomeBG from './../assets/images/illustrationWelcome.png';
import MailInp from './../components/mailInp';
import { ReactComponent as Path1 } from './../assets/images/wplanet.svg';
import { ReactComponent as Path2 } from './../assets/images/wplanet2.svg';
import { ReactComponent as Path3 } from './../assets/images/yellowStar.svg';
import { ReactComponent as Path4 } from './../assets/images/redStar.svg';
import { ReactComponent as Path5 } from './../assets/images/blueStar.svg';
import { ReactComponent as Path6 } from './../assets/images/whiteStar.svg';

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__content">
        <h1 className="title">Decentralized finance on BITCOIN</h1>
        <p className="subTitle">
          Unlocking a permissionless alternative to centralized banking, powered
          by the world's largest blockchain.
        </p>
        <br />
        <h2 className="join-us__title">join us</h2>
        <MailInp />
      </div>

      <div className="welcome__grafic">
        <Path1 className="w-Pnalet1" rel="preload" />
        <Path2 className="w-Pnalet2" rel="preload" />
        <Path3 className="w-Pnalet3" rel="preload" />
        <Path4 className="w-Pnalet4" rel="preload" />
        <Path5 className="w-Pnalet5" rel="preload" />
        <Path6 className="w-Pnalet6" rel="preload" />
        <Path6 className="w-Pnalet7" rel="preload" />
        <Path4 className="w-Pnalet8" rel="preload" />
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
