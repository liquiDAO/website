import React from 'react';
import './../scss/noMatch.scss';
import { Link } from 'react-router-dom';
// import astronaut from './../assets/images/astronaut.png'
// import { ReactComponent as Path1 } from './../assets/images/liveBG2.svg';

function NoMatch() {

  return (
    <>
      <section id='error-404'>
        {/* <Path1 className='error-404-bg'/> */}
        <div  className='error-404-contnent'>
          {/* <img src={astronaut} alt='astronaut-img'/> */}
          <h1 className='error__title'>Looks like You’re lost in space</h1>
          <h1 className='error-404__title'>404</h1>
          <Link to='/'>
            <div className='module-border-wrap'>
              <button className='web-button-404'>Home Page</button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default NoMatch;
