import React, { useState } from 'react';
import { FooterWrapper } from './style';

function Footer() {
  const [isSelected, setSelected] = useState([false, false, false]);
  return (
    <FooterWrapper>
      <div className='navItem'>
        <i className='iconfont'>&#xe689;</i>
        <div className='text'>Details</div>
      </div>
      <div className='navItem '>
        <i className='iconfont'>&#xe60a;</i>
        <div className='text'>Statistics</div>
      </div>
      <div className='navItem'>
        <i className='iconfont'>&#xe781;</i>
        <div className='text'>Settings</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
