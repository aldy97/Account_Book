import React from 'react';
import { FooterWrapper } from './style';

function Footer() {
  const urlParams = window.location.href;
  const keyword = urlParams.split('/')[3];

  return (
    <FooterWrapper>
      <div
        className={keyword === '' ? 'navItem isSelected' : 'navItem'}
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <i className='iconfont'>&#xe689;</i>
        <div className='text'>Details</div>
      </div>

      <div
        className={keyword === 'statistics' ? 'navItem isSelected' : 'navItem'}
        onClick={() => {
          window.location.href = '/statistics';
        }}
      >
        <i className='iconfont'>&#xe60a;</i>
        <div className='text'>Analysis</div>
      </div>

      <div
        className={keyword === 'setting' ? 'navItem isSelected' : 'navItem'}
        onClick={() => {
          window.location.href = '/setting';
        }}
      >
        <i className='iconfont'>&#xe610;</i>
        <div className='text'>Me</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
