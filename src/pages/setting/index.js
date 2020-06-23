import React from 'react';
import { Item } from './style';

function Setting() {
  return (
    <div>
      <Item>
        <i
          className='iconfont'
          style={{
            'margin-right': '10px',
            'margin-left': '3px',
            'font-size': '25px',
          }}
        >
          &#xe701;
        </i>
        Recommend this app to your friends
      </Item>
      <Item
        onClick={() =>
          (window.location.href = 'https://github.com/aldy97/Account_Book')
        }
      >
        <i className='iconfont'>&#xe691;</i>
        Support me by starring this app
      </Item>
      <Item
        onClick={() => {
          window.location.href = 'mailto:fengxiong34@gmail.com';
        }}
      >
        <i className='iconfont'>&#xe6cb;</i>
        Contact me
      </Item>
      <Item>
        <i className='iconfont'>&#xe781;</i>
        General Settings
      </Item>
    </div>
  );
}

export default Setting;
