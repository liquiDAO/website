import React from 'react';
import './../scss/home.scss';
// import Path1 from './../components/test.html'
// import { ReactComponent as Path1 } from './../assets/images/liveBG1.svg';
import Footer from '../components/Footer';
import Welcome from '../components/welcome';
import MarketMaking from '../components/marketMaking';
import Powered from '../components/power';
import Crosschain from '../components/crosschain';
import JoinUs from '../components/joinUs';

function Home() {
  return (
    <div className="home">
      <Welcome />
      <MarketMaking />
      <Powered />
      <Crosschain />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Home;
