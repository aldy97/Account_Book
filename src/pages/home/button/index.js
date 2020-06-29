import React from 'react';
import { ButtonWrapper } from './style';
//首页的悬浮按钮
function Button(props) {
  return (
    <ButtonWrapper onClick={props.handleSetShowNumPad}>
      <i className='iconfont icon-jiluziliaoguanli' />
    </ButtonWrapper>
  );
}

export default Button;
