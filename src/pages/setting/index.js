import React from 'react';
import { Item } from './style';

function Setting() {
  return (
    <div
      style={{
        position: 'fixed',
        marginTop: 88,
      }}
    >
      <Item>
        <i
          className='iconfont icon-erweima'
          style={{
            'margin-right': '10px',
            'margin-left': '12px',
            'font-size': '25px',
          }}
        />
        Recommend this app to your friends
      </Item>
      <Item
        onClick={() =>
          (window.location.href = 'https://github.com/aldy97/Account_Book')
        }
      >
        <i className='iconfont icon-github' />
        Support me by starring this app
      </Item>
      <Item
        onClick={() => {
          window.location.href = 'mailto:fengxiong34@gmail.com';
        }}
      >
        <i className='iconfont icon-liaotian' />
        Contact me
      </Item>
      <Item>
        <i className='iconfont icon-shezhi' style={{ fontWeight: 800 }} />
        General Settings
      </Item>
    </div>
  );
}

export default Setting;
