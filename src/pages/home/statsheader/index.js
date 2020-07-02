import React, { useEffect } from 'react';
import { Wrapper, TypeFilter, MonthFilter } from './style';
import { ExpenseList, IncomeList, AllType } from '../../../static/itemList';

//过滤器（类型选择 + 月份选择），支出/收入
function StatesHeader(props) {
  const list = ExpenseList.concat(IncomeList).concat(AllType);
  const item = list.filter((item) => item.id === props.typeId)[0];

  useEffect(() => {
    console.log(props.month.format('MM'));
  });

  return (
    <Wrapper>
      <TypeFilter onClick={props.handleSetShow}>
        <div>{item.name}</div>
        <i className={`iconfont ${item.icon}`}></i>
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
