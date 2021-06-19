import React, { useRef } from 'react';
import './../scss/road.scss';
import Footer from '../components/Footer';
import RoadItem, { Status } from '../components/roadItem';

function Road() {
  const container = useRef(0);

  const items = [
    {
      title: 'Staking - Q3',
      body: 'Timelock LDAO token to receive static rewards and vote proposals',
      status: Status.Progress,
    },
    {
      title: 'Swap - Q3',
      body: 'Swap Liquid assets in the browser with Marina Browser extension. Integration with BitMatrix, COMIT, LiquiDEX and TDEX',
      status: Status.Progress,
    },
    {
      title: 'Trading pools - Q4',
      body: 'Lock liquidity in non-custodial trading pools on-chain and off-chain',
      status: Status.Planned,
    },
    {
      title: 'Lending - Q4',
      body: 'Lend and Borrow L-USDt via HodlHodl - Q4',
      status: Status.Planned,
    },
    {
      title: 'Derivatives - Q1 2022',
      body: 'DLC based derivative contracts',
      status: Status.Planned,
    },
    {
      title: 'Stablecoin - Q1 2022',
      body: 'Algorithmic stablecoin',
      status: Status.Planned,
    },
    {
      title: 'Governance - Q2 2022',
      body: 'DLC based optmistic voting platform for trust minimized governance',
      status: Status.Planned,
    },
  ];

  return (
    <>
      <div className="Road" ref={container}>
        <div className="Road__container">
          <span className="Road__box__line" />
          <div className="Road__box">
            {items.map((item, index) => (
              <RoadItem
                title={item.title}
                text={item.body}
                key={index}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Road;
