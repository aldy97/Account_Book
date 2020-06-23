import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';

function Button() {
  const ButtonWrapper = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid #666;
    background: white;
    box-shadow: 1px 1px 2px 1px #666;
    border-radius: 50%;
    text-align: center;
    position: fixed;
    bottom: 92px;
    margin-left: 410px;
    z-index: 10;
    i {
      font-size: 30px;
      line-height: 50px;
      color: ${theme.$blue};
    }
  `;
  return (
    <ButtonWrapper>
      <i className='iconfont'>&#xe612;</i>
    </ButtonWrapper>
  );
}

export default Button;
