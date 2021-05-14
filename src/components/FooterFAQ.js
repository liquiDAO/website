import React from 'react'
import './../scss/footer.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Path1 } from './../assets/images/inst.svg';
import { ReactComponent as Path2 } from './../assets/images/face.svg';
import { ReactComponent as Path3 } from './../assets/images/youtube.svg';
import { ReactComponent as Path4 } from './../assets/images/tweeter.svg';

function Footer(){
    return(
        <footer className='footer'>
            <h2 className='join-us__title'>Our partners</h2>
            <div className='footer__navbar'>
                <Link to='/' className='footer__navbar__link'>About Us</Link>
                <Link to='/' className='footer__navbar__link'>blog</Link>
                <Link to='/' className='footer__navbar__link'>Contact Us</Link>
                <Link to='/aaa' className='footer__navbar__link'>Sell Bitcoin/ Giftcard</Link>
                <Link to='/faq' className='footer__navbar__link'>FAQ</Link>
            </div>
            <div className='footer__icons'>
                <Path3  className='footer__icons__item' rel="preload"/>
                <Path2  className='footer__icons__item' rel="preload"/>
                <Path1  className='footer__icons__item' rel="preload"/>
                <Path4  className='footer__icons__item' rel="preload"/>
            </div>
        </footer>
    )
}

export default Footer