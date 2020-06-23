import React from 'react';
import { Wrapper, ButtonWrapper, DateWrapper } from './style';

function StatesHeader(props) {
  return (
    <Wrapper>
      <ButtonWrapper onClick={props.handleSetShow}>
        <div>All types</div>
        <i className='iconfont'>&#xe6c0;</i>
      </ButtonWrapper>

      <DateWrapper>
        <span className='date'>
          2020 June 22
          <i className='iconfont'>&#xe668;</i>
        </span>
        <span className='out-income'>
          <span className='outcome'>Total outcome: $0.00</span>
          <span className='income'>Total income: $0.00</span>
        </span>
      </DateWrapper>
    </Wrapper>
  );
}

export default StatesHeader;
