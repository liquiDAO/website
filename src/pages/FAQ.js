import React from 'react';
import './../scss/faq.scss';
import Particles from 'react-particles-js';
import Footer from '../components/Footer';
import MailInp from '../components/mailInp';

function FAQ() {
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
    <>
      <div className="FAQ">
        <h1 className="FAQ__title">FAQ</h1>
        <div className="FAQ__container">
          <details className="FAQ__details">
            <summary className="FAQ__summary">What is LiquiDAO?</summary>
            <p className="FAQ__text">
              LiquiDAO is Decentralized Anonymous Organization, working as
              trust-minimized financial co-operative born to coordinate and
              deploy liquidity on the nascent Liquid Network DeFi ecosystem that
              simultaneously holds incentive making financial returns for his
              members (LDAO token holders).
              <br />
              LiquiDAO offers an easy to use web application that will
              co-integrate all the Liquid Network DeFi services to let anyone
              have seamless access.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">What is LDAO token?</summary>
            <p className="FAQ__text">
              LDAO is a Liquid Network asset, working as a tokenized LiquiDAO
              share that grants to the LiquiDAO holders voting rights and the
              ability receive static rewards.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              How to become a LiquiDAO member?
            </summary>
            <p className="FAQ__text">
              In order to become a LiquiDAO member, it's mandatory to timelock
              (stake) LDAO token on the Liquid Network blockchain. This will
              allow one to propose and vote in the voting platform and to
              receive a pro-rata static reward on future profits.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              Is LDAO token a crypto-currency or is it a Bitcoin competitor?
            </summary>
            <p className="FAQ__text">
              No, LDAO is a tokenized share and governance token, is not meant
              to become money or a store of value.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              Where I can buy LDAO token?
            </summary>
            <p className="FAQ__text">
              LDAO token will be available at launch in major decentralized
              exchnages on Liquid Network and as a synthetic representation on
              other blockchain ecosystem. Beware that to be eligible for static
              rewards and exercise voting power is only possible on the Liquid
              Network. Presale investors must reach out authorized syndicates
              operators (Liquidao.capital).
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              I want to use the LiquiDAO web application for trading, lending,
              derivatives etc. I need to own LDAO token?
            </summary>
            <p className="FAQ__text">
              LiquiDAO web application is accessible via Onion Service, making
              it impossible to block access based on a specific location.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              Is there any geographical restriction to access LiquiDAO services?
            </summary>
            <p className="FAQ__text">
              No, LiquiDAO web application is accessible via Onion Hidden
              Service and cleartext.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              To buy LDAO token I need to go through a KYC procedure?
            </summary>
            <p className="FAQ__text">
              To acquire LDAO token there is no KYC requirement, nor does
              LiquiDAO retains any identity. Third party syndicates or
              decentralized exchanges could require it based on their regulatory
              requirements and jurisdisction they operate in.
            </p>
          </details>
        </div>
        <Particles params={particleOpt} className="particles" />
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
