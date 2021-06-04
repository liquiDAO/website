import React, { useState, useEffect, useRef } from 'react';
import './../scss/road.scss';
import Footer from '../components/FooterFAQ';
import MailInp from '../components/mailInp';
import RoadItem from '../components/roadItem';

function Road() {
  const [item, setitem] = useState([]);
  const container = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((item) => setitem(item));
  }, []);

  return (
    <>
      <div className="Road" ref={container}>
        <div className="Road__container">
          <span className="Road__box__line" />
          <div className="Road__box">
            {item.map((item) => (
              <RoadItem title={item.title} text={item.body} key={item.id} />
            ))}
          </div>
        </div>
        <MailInp />
      </div>
      <Footer />
    </>
  );
}

export default Road;
