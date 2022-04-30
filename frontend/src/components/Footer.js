

import { useState } from 'react';
import xxLogo  from '../assets/img/footer/xx.svg';

import Sc1 from '../assets/img/footer/soc/1.png';
import Sc2 from '../assets/img/footer/soc/2.png';
import Sc3 from '../assets/img/footer/soc/3.png';
import Sc4 from '../assets/img/footer/soc/4.png';

function Footer() {
  return (
    <section className='footer py-4' id="footer">
        <div className='container'>
            <div className='row main justify-content-between align-items-center'>
                <div className='col-md-4 mt-3 logo d-flex align-items-center'>
                  <div className='inner'>
                    <img src={xxLogo} className='img' alt="xxLogo"/>
                    <span className='logo-text ms-3'>CasperPad</span>
                  </div>
                </div>
                <div className='eula col-md-4 col-sm-12 mt-3'>
                  <div className='copyright'>© - 2022 CasperPad . All Rights reserved</div>
                </div>
                <span className='links col-md-4 col-sm-12 row mt-3'>
                    <a target='_blank' href='mailto:info@casper-pad.com' className='link'><img src={Sc1} alt="sc1" /></a>
                    <a target='_blank' href='https://casperpad.medium.com/' className='link'><img src={Sc2} alt="sc2" /></a>
                    <a target='_blank' href='https://t.me/CasperPadPublic' className='link'><img src={Sc3} alt="sc3" /></a>
                    <a target='_blank' href='https://twitter.com/Casper_Pad' className='link'><img src={Sc4} alt="sc4" /></a>
                </span>
            </div>
        </div>
    </section>
  );
}

export default Footer;
