import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';

function Button() {
  const ButtonWrapper = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
    position: fixed;
    bottom: 100px;
    text-align: center;
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
