import React from 'react';
import { Wrapper, TypeFilter, MonthFilter } from './style';

//过滤器（类型选择 + 月份选择），支出/收入
function StatesHeader(props) {
  return (
    <Wrapper>
      <TypeFilter onClick={props.handleSetShow}>
        <div>{props.stateTitle}</div>
        <i className={`iconfont ${props.stateIcon}`}></i>
      </TypeFilter>
      <MonthFilter>
        <span className='date' onClick={props.handleSetShowMonth}>
          {props.month.format('MMMM YYYY')}
          <i className='iconfont' name='arrow-down' style={{ marginLeft: 4 }}>
            &#xe668;
          </i>
        </span>
        <span className='outcome' style={{ marginRight: 8 }}>
          Expense: $0.00
        </span>
        <span className='income'> Income: $0.00</span>
      </MonthFilter>
    </Wrapper>
  );
}

export default StatesHeader;
