import React from 'react';
import styled from 'styled-components';
import theme from '../static/theme/index';

function Footer() {
  const urlParams = window.location.href;
  const keyword = urlParams.split('/')[3];

  const handleClick = (location) => {
    window.location.href = '/' + location;
  };

  const FooterWrapper = styled.div`
    height: ${theme.$footerHeight};
    width: ${theme.$width};
    background: white;
    border-top: 1px solid #eee;
    position: fixed;
    z-index: 10;
    bottom: 0;
    display: flex;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
    .navItem {
      height: ${theme.$footerHeight};
      flex: 1;
      text-align: center;
      cursor: pointer;
    }
    .iconfont {
      font-size: 25px;
      display: block;
      height: 40px;
      line-height: 50px;
      bottom: 0;
    }
    .text {
      height: 24px;
    }
    .isSelected {
      color: ${theme.$blue};
    }
  `;

  return (
    <FooterWrapper>
      <div
        className={keyword === '' ? 'navItem isSelected' : 'navItem'}
        onClick={() => handleClick('')}
      >
        <i className='iconfont'>&#xe689;</i>
        <div className='text'>Summary</div>
      </div>

      <div
        className={keyword === 'statistics' ? 'navItem isSelected' : 'navItem'}
        onClick={() => handleClick('statistics')}
      >
        <i className='iconfont'>&#xe60a;</i>
        <div className='text'>Analysis</div>
      </div>

      <div
        className={keyword === 'setting' ? 'navItem isSelected' : 'navItem'}
        onClick={() => handleClick('setting')}
      >
        <i className='iconfont'>&#xe610;</i>
        <div className='text'>Me</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
