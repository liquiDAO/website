import React from 'react'
import './../scss/crosschain.scss'
import CrosschainBG from './../assets/images/crosschain1.png';
import rockLeft from './../assets/images/rockLeft.png';
import rockRight from './../assets/images/rockRight.png';
import { ReactComponent as Path5 } from './../assets/images/cloudLeft.svg';
import { ReactComponent as Path6 } from './../assets/images/cloudRight.svg';

function Crosschain(){
    return(
        <section className='Crosschain'>
            <div className='Crosschain__content'>
                <h1 className='title'>Crosschain Liquidy BRIDGE</h1>
                <p className='subTitle'>LDAO token bridges liquidity from other blockchain ecosystems. LDAO token is redeemable on Liquid Network, Binance Smart Chain, and Ethereum.</p>
            </div>
            <div className='Crosschain__grafic'>
                <Path5 className='cloudLeft' rel="preload"/>
                <Path6 className='cloudRight' rel="preload"/>
                <img src={rockRight} className='CrosschainBG_Right' alt='rockImg'/>
                <img src={rockLeft} className='CrosschainBG_Left' alt='rockImg'/>
                <img src={CrosschainBG} className='CrosschainBG' alt='CrosschainIamge'/>
            </div>
        </section>
    )
}

export default Crosschain