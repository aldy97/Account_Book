import React from 'react';
import { Wrapper, ButtonWrapper, DateWrapper } from './style';
import moment from 'moment';

function StatesHeader(props) {
  return (
    <Wrapper>
      <ButtonWrapper
        onClick={props.handleSetShow}
        style={{ cursor: 'pointer' }}
      >
        <div>All Types</div>
        <i className='iconfont'>&#xe6c0;</i>
      </ButtonWrapper>

      <DateWrapper>
        <span
          className='date'
          onClick={props.handleSetShowMonth}
          style={{ marginRight: 12, cursor: 'pointer' }}
        >
          {moment().format('MMMM YYYY')}
          <i className='iconfont' name='arrow-down' style={{ marginLeft: 4 }}>
            &#xe668;
          </i>
        </span>
        <span className='outcome' style={{ marginRight: 8 }}>
          Expense: $0.00
        </span>
        <span className='income'> Income: $0.00</span>
      </DateWrapper>
    </Wrapper>
  );
}

export default StatesHeader;
