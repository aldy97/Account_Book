import React, { useState } from 'react';
import { FooterWrapper } from './style';

function Footer() {
  //初始状态下显示Details（home）界面
  const [isSelected, setSelected] = useState([true, false, false]);
  return (
    <FooterWrapper>
      <div
        className={isSelected[0] ? 'navItem isSelected' : 'navItem'}
        onClick={() => {
          setSelected([true, false, false]);
          window.location.href = '/';
        }}
      >
        <i className='iconfont'>&#xe689;</i>
        <div className='text'>Details</div>
      </div>
      <div
        className={isSelected[1] ? 'navItem isSelected' : 'navItem'}
        onClick={() => {
          setSelected([false, true, false]);
          window.location.href = '/stat';
        }}
      >
        <i className='iconfont'>&#xe60a;</i>
        <div className='text'>Statistics</div>
      </div>
      <div
        className={isSelected[2] ? 'navItem isSelected' : 'navItem'}
        onClick={() => {
          setSelected([false, false, true]);
          window.location.href = '/setting';
        }}
      >
        <i className='iconfont'>&#xe781;</i>
        <div className='text'>Settings</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
