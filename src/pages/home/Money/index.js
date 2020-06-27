import React, { useState } from 'react';
import NumPad from '../numPad/index';
import {
  StyledMoney,
  TypeSection,
  Button,
  AmountSection,
  CategoryList,
  CategoryItem,
  Category,
  CategoryText,
} from './style';
import { CloseBar } from '../type/style';
import { ExpenseList, IncomeList } from '../../../static/itemList';

function Money(props) {
  const value = '0';
  const [expenseButtonSelected, setExpenseButtonSelected] = useState(true);
  const list = expenseButtonSelected ? ExpenseList : IncomeList;

  return (
    <StyledMoney>
      <CloseBar style={{ border: '1px solid #eee', position: 'static' }}>
        <i
          className='iconfont'
          style={{ marginLeft: 12 }}
          onClick={props.handleSetShowNumPad}
        >
          &#xe687;
        </i>
      </CloseBar>
      <TypeSection>
        <Button
          className={expenseButtonSelected ? 'selected' : null}
          onClick={() => {
            setExpenseButtonSelected(!expenseButtonSelected);
          }}
        >
          Expense
        </Button>
        <Button
          className={expenseButtonSelected ? null : 'selected'}
          onClick={() => {
            setExpenseButtonSelected(!expenseButtonSelected);
          }}
        >
          Income
        </Button>
      </TypeSection>
      <AmountSection>
        <span>$</span>
        <div>{value}</div>
      </AmountSection>
      {/* 显示支出/收入类型区块*/}
      <CategoryList>
        {list.map((item, index) => {
          return (
            <CategoryItem key={index} style={{ cursor: 'pointer' }}>
              <Category>
                <i className={`iconfont ${item[1]}`}></i>
              </Category>
              <CategoryText>{item[0]}</CategoryText>
            </CategoryItem>
          );
        })}
      </CategoryList>
      <NumPad value={value} />
    </StyledMoney>
  );
}

export default Money;
