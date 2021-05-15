import React from 'react';
import './../scss/faq.scss';
import Particles from 'react-particles-js';
import Footer from '../components/FooterFAQ';
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
            <summary className="FAQ__summary">
              When is it beneficial to choose S-Corp?
            </summary>
            <p className="FAQ__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remai.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              When is it beneficial to choose S-Corp?
            </summary>
            <p className="FAQ__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remai.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              When is it beneficial to choose S-Corp?
            </summary>
            <p className="FAQ__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remai.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              When is it beneficial to choose S-Corp?
            </summary>
            <p className="FAQ__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remai.
            </p>
          </details>
          <details className="FAQ__details">
            <summary className="FAQ__summary">
              When is it beneficial to choose S-Corp?
            </summary>
            <p className="FAQ__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remai.
            </p>
          </details>
        </div>
        <h2 className="join-us__title">join us</h2>
        <MailInp />
        <Particles params={particleOpt} className="particles" />
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
