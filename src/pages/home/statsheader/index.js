import React from 'react';
import { Wrapper, ButtonWrapper, DateWrapper } from './style';
import moment from 'moment';

function StatesHeader(props) {
  return (
    <Wrapper>
      <ButtonWrapper onClick={props.handleSetShow}>
        <div>All Types</div>
        <i className='iconfont'>&#xe6c0;</i>
      </ButtonWrapper>

      <DateWrapper>
        <span className='date' onClick={props.handleSetShowMonth}>
          {moment().format('MMMM YYYY')}
          <i className='iconfont' name='arrow-down'>
            &#xe668;
          </i>
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
