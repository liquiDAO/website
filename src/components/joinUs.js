import React from 'react';
import './../scss/joinUs.scss';
import iconfinderAsset1 from './../assets/images/iconfinderAsset1.png';
import iconfinderAsset2 from './../assets/images/iconfinderAsset2.png';
import iconfinderAsset from './../assets/images/iconfinderAsset.png';
// import { ReactComponent as Path1 } from './../assets/images/JoinshapeLeft.svg';
// import { ReactComponent as Path2 } from './../assets/images/JoinshapeRight.svg';
import Particles from 'react-particles-js';

function JoinUs() {
  const particleOpt = {
    particles: {
      number: {
        value: 20,
      },
      size: {
        value: 2,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };

  return (
    <section className="join-us">
      <Particles params={particleOpt} className="particles" />
      <div className="join-us__form">
        <p className="join-us__bigtitle">How it works</p>
        <div className="work-block">
          <div className="work-block__item">
            <img alt="work" src={iconfinderAsset1} className="work-block_img" />
            <p className="work-block__item__text">
              The Liquid Network is a sidechain-based settlement network that
              enables faster, cheaper, and more confidential Bitcoin
              transactions and the issuance of digital assets like
              Bitcoin-enabled DeFi.
            </p>
          </div>
          <div className="work-block__item">
            <img alt="work" src={iconfinderAsset2} className="work-block_img" />
            <p className="work-block__item__text">
              Through the LDAO token, LiquiDAO provides the necessary liquidity
              to kickstart Bitcoin's next evolution as a confidential,
              ultra-scalable blockchain, backed by the longest, most proven
              record in the industry.
            </p>
          </div>
          <div className="work-block__item">
            <img alt="work" src={iconfinderAsset} className="work-block_img" />
            <p className="work-block__item__text">
              LiquiDAO is powered by trust-minimised, non-custodial trading
              services via Discreet Log Contracts, Hashed Time-Locked Collateral
              Contracts, Multisignatures, and atomic swaps.
            </p>
          </div>
        </div>
        <h2 className="join-us__title">LiquiDAO Architecture</h2>
        <div className="join-us__select__block">
          <p className="join-us__select__block__item--center">Trading pools</p>
          <p className="join-us__select__block__item--center">Derivatives</p>
          <p className="join-us__select__block__item--center">Lending</p>
        </div>
        <div className="join-us__table">
          {/* <input type='radio'/> */}
          <div className="join-us__table__container">
            <div className="join-us__table__row">
              <div className="join-us__table__item">Issued Assets</div>
              <div className="join-us__table__item">Atomic Swaps</div>
              <div className="join-us__table__item">Discreet Log Contracts</div>
            </div>
            <div className="join-us__table__item">Liquid Network</div>
            <div className="join-us__table__item">Bitcoin</div>
          </div>
        </div>
        <div className="join-us__footer">
          <h2 className="join-us__title">Leveraging the Liquid Network</h2>
          <span className="join-us__footer__line" />
          <div className="join-us__footer__item">
            <h2 className="join-us__subTitle ">58+</h2>
            <p className="join-us__title join-us__footer__item__text">
              Liquid Network Members (projects, exchanges, trading desks)
            </p>
          </div>
          <div className="join-us__footer__item">
            <h2 className="join-us__subTitle ">2890</h2>
            <p className="join-us__title join-us__footer__item__text">
              BTC pegged into the Liquid Network (as of May 2020)
            </p>
          </div>
          <div className="join-us__footer__item">
            <h2 className="join-us__subTitle ">$ 160M USD</h2>
            <p className="join-us__title join-us__footer__item__text">
              Total value pegged into the ecosystem (as of May 2020)
            </p>
          </div>
        </div>
      </div>
      {/* <div className='FAQ'> 
      <h1 className="FAQ__title">FAQ</h1>
      <div className="FAQ__container">
        <details className="FAQ__details">
          <summary className="FAQ__summary">
            When is it beneficial to choose S-Corp?
          </summary>
          <p className="FAQ__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remai.
          </p>
        </details>
        <details className="FAQ__details">
          <summary className="FAQ__summary">
            When is it beneficial to choose S-Corp?
          </summary>
          <p className="FAQ__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remai.
          </p>
        </details>
        <details className="FAQ__details">
          <summary className="FAQ__summary">
            When is it beneficial to choose S-Corp?
          </summary>
          <p className="FAQ__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remai.
          </p>
        </details>
        <details className="FAQ__details">
          <summary className="FAQ__summary">
            When is it beneficial to choose S-Corp?
          </summary>
          <p className="FAQ__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remai.
          </p>
        </details>
        <details className="FAQ__details">
          <summary className="FAQ__summary">
            When is it beneficial to choose S-Corp?
          </summary>
          <p className="FAQ__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remai.
          </p>
        </details>
      </div>
      */}
      <Particles params={particleOpt} className="particles" />
      {/* </div> */}
    </section>
  );
}

export default JoinUs;
