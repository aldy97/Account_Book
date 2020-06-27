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
  const [amount, setAmount] = useState(0);
  const [amountString, setAmountString] = useState(amount.toString());
  // const [selectedItem, setSelectedItem] = useState(-1);

  const [expenseButtonSelected, setExpenseButtonSelected] = useState(true);
  const list = expenseButtonSelected ? ExpenseList : IncomeList;

  const onChangeAmount = (newValue) => {
    setAmountString(newValue);
    setAmount(parseFloat(newValue));
  };

  const onOK = () => {
    if (amount === 0) return alert('Input can not be 0');
  };

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
        <div>{amountString}</div>
      </AmountSection>
      {/* 显示支出/收入类型区块*/}
      <CategoryList>
        {list.map((item) => {
          return (
            <CategoryItem key={item.id}>
              <Category>
                <i className={`iconfont ${item.icon}`}></i>
              </Category>
              <CategoryText>{item.name}</CategoryText>
            </CategoryItem>
          );
        })}
      </CategoryList>
      <NumPad value={amountString} onChange={onChangeAmount} onOK={onOK} />
    </StyledMoney>
  );
}

export default Money;
