import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';

function Button(props) {
  const ButtonWrapper = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid #fff;
    background: white;
    box-shadow: 0 2px 24px -6px #666;
    border-radius: 50%;
    text-align: center;
    position: fixed;
    bottom: 100px;
    margin-left: 28px;
    z-index: 10;
    i {
      font-size: 30px;
      line-height: 50px;
      color: ${theme.$blue};
    }
  `;
  return (
    <ButtonWrapper onClick={props.handleSetShowNumPad}>
      <i className='iconfont' name='记账'>
        &#xe612;
      </i>
    </ButtonWrapper>
  );
}

export default Button;
