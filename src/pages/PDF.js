import React from 'react';
import './../scss/pdf.scss';
// import astronaut from './../assets/images/astronaut.png'
// import { ReactComponent as Path1 } from './../assets/images/liveBG2.svg';

function PDF() {
  return (
    <>
      <section className="pdf">
        <div className="pdf__container">
          <div className="pdf__content--left">
            <div className="pdf__box">
              <h2 className="pdf__title">
                Defi on <span className="pdf__title--bold">Bitcoin</span>
              </h2>
              <p className="pdf__text">
                LiquiDAO is the foundation for Bitcoin-enabled DeFi. A
                decentralised trading protocol, powered by the world’s largest
                blockchain. Instant settlement, low fees, confidential by design
              </p>
            </div>
            <div className="pdf__box">
              <h2 className="pdf__title">
                Powered by the{' '}
                <span className="pdf__title--bold">Liquid Network</span>
              </h2>
              <p className="pdf__text">
                LiquiDAO is a Bitcoin Layer 3 Network on top of the Liquid
                sidechain which enables:
              </p>
              <p className="pdf__li">Rapid confirmations and settlements</p>
              <p className="pdf__li">Extremely low-cost transaction fees</p>
              <p className="pdf__li">Confidentiality by design</p>
            </div>
            <div className="pdf__box">
              <h2 className="pdf__title">
                <span className="pdf__title--bold">LDAO</span> Token
              </h2>
              <p className="pdf__text">
                LDAO serves as the governance token and incentives liquidity on
                the LiquiDAO network.
              </p>
              <p className="pdf__li">
                Cross chain token redeemable on Liquid Network, Binance Smart
                Chain, and Eth
              </p>
              <p className="pdf__li">
                Instant liquidity via simultaneous listings on TDEX (Liquid
                Network dex), Pancake Swap (Binance), and UniSwap.
              </p>
            </div>
            {/* <div className='pdf__box'>
                <h2 className='pdf__title'>Defi on <span className='pdf__title--bold'>Bitcoin</span></h2>
                <p className='pdf__text'>LiquiDAO is the foundation for Bitcoin-enabled DeFi. A decentralised trading protocol, powered by the world’s largest blockchain. Instant settlement, low fees, confidential by design</p>
              </div> */}
          </div>
          <div className="pdf__content--right"></div>
        </div>
      </section>
    </>
  );
}

export default PDF;
