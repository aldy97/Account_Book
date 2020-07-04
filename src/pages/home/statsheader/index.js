import React from 'react';
import { Wrapper, TypeFilter, MonthFilter } from './style';
import { ExpenseList, IncomeList, AllType } from '../../../static/itemList';

//过滤器（类型选择 + 月份选择), 以及支出/收入显示
function StatesHeader(props) {
  const {
    typeId,
    month,
    handleSetShow,
    handleSetShowMonth,
    expense,
    income,
  } = props;
  const list = ExpenseList.concat(IncomeList).concat(AllType);
  const item = list.filter((item) => item.id === typeId)[0];

  return (
    <Wrapper>
      <TypeFilter onClick={handleSetShow}>
        <div>{item.name}</div>
        <i className={`iconfont ${item.icon}`}></i>
      </TypeFilter>
      <MonthFilter>
        <span className='date' onClick={handleSetShowMonth} style={{cursor: 'pointer'}}>
          {month.format('MMMM YYYY')}
          <i className='iconfont' name='arrow-down' style={{ marginLeft: 4 }}>
            &#xe668;
          </i>
        </span>
        <span className='outcome' style={{ marginRight: 8 }}>
          Expense: ${expense.toFixed(2)}
        </span>
        <span className='income'> Income: ${income.toFixed(2)}</span>
      </MonthFilter>
    </Wrapper>
  );
}

export default StatesHeader;
