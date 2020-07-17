import React from 'react';
import Header from '../../commons/header';
import Footer from '../../commons/footer';
import theme from '../../static/theme/index';
import { Item } from './style';

function Setting() {
  return (
    <div
      style={{
        position: 'fixed',
        marginTop: 88,
        height: '100%',
        background: '#eee',
      }}
    >
      <Header />
      <Item style={{ marginBottom: 8 }}>
        <i
          className='iconfont icon-erweima'
          style={{
            'margin-right': '10px',
            'margin-left': '12px',
            'font-size': '25px',
            color: `${theme.$blue}`,
          }}
        />
        Recommend this app to your friends
      </Item>
      <Item
        onClick={() =>
          (window.location.href = 'https://github.com/aldy97/Account_Book')
        }
      >
        <i
          className='iconfont icon-github'
          style={{ color: `${theme.$orange}` }}
        />
        Support me by starring this app
      </Item>
      <Item
        onClick={() => {
          window.location.href = 'mailto:fengxiong34@gmail.com';
        }}
      >
        <i
          className='iconfont icon-liaotian'
          style={{ color: `${theme.$blue}` }}
        />
        Contact me
      </Item>
      <Item
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <i
          className='iconfont icon-shezhi'
          style={{ fontWeight: 800, color: `${theme.$orange}` }}
        />
        General Settings
      </Item>
      <Footer />
    </div>
  );
}

export default Setting;
