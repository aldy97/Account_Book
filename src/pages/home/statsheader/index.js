import React, { useState, useEffect } from 'react';
import { DEFAULT_RECORDS } from '../central/record';
import { Wrapper, TypeFilter, MonthFilter } from './style';
import { ExpenseList, IncomeList, AllType } from '../../../static/itemList';

//过滤器（类型选择 + 月份选择), 以及支出/收入显示
function StatesHeader(props) {
  const { typeId, month, handleSetShow, handleSetShowMonth } = props;

  const list = AllType.concat(ExpenseList).concat(IncomeList);
  //被选中的消费/支出类型：对象
  const item = list.filter((item) => item.id === typeId)[0];

  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  //DailyRecord[]
  const filteredMonthList = DEFAULT_RECORDS.filter(
    (item) => item.date.format('MM') === month.format('MM')
  );

  //number[][]
  const filteredList = filteredMonthList
    .map((daily) => daily.recordList)
    .map((recordList) =>
      recordList.filter((record) =>
        typeId === 0 ? record : record.categoryId === typeId
      )
    )
    .map((recordList) => recordList.map((item) => item.amount));

  //number[][]
  const filteredIncomeList = filteredList.map((amountList) =>
    amountList.filter((amount) => amount > 0)
  );
  //number[][]
  const filteredExpenseList = filteredList.map((amountList) =>
    amountList.filter((amount) => amount < 0)
  );

  //number
  let currentExpense = 0;
  //number
  let currentIncome = 0;

  //total income: number
  for (const i in filteredIncomeList) {
    for (const j in filteredIncomeList[i]) {
      currentIncome += filteredIncomeList[i][j];
    }
  }

  //total expense: number
  for (const i in filteredExpenseList) {
    for (const j in filteredExpenseList[i]) {
      currentExpense += filteredExpenseList[i][j];
    }
  }

  useEffect(() => {
    setIncome(currentIncome);
    setExpense(currentExpense);
  }, [currentIncome, currentExpense]);

  return (
    <Wrapper>
      <TypeFilter onClick={handleSetShow}>
        <div>{item.name}</div>
        <i className={`iconfont ${item.icon}`}></i>
      </TypeFilter>
      <MonthFilter>
        <span
          className='date'
          onClick={handleSetShowMonth}
          style={{ cursor: 'pointer' }}
        >
          {month.format('MMMM YYYY')}
          <i
            className='iconfont icon-jiantou-copy-copy'
            style={{ marginLeft: 4 }}
          />
        </span>
        <span
          className={list[typeId].id > 21 ? 'hidden' : ''}
          style={{ marginRight: 8 }}
        >
          Expense{typeId === 0 ? '' : ` on ${list[typeId].name}`}: $
          {expense.toFixed(2)}
        </span>
        <span
          className={
            list[typeId].id < 22 && list[typeId].id > 0 ? 'hidden' : ''
          }
        >
          Income{typeId === 0 ? '' : ` from ${list[typeId].name}`}: $
          {income.toFixed(2)}
        </span>
      </MonthFilter>
    </Wrapper>
  );
}

export default StatesHeader;
