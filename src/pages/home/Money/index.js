import React, { useState } from 'react';
import CategoryList from '../categoryList/index';
import NumPad from '../numPad/index';
import { StyledMoney, TypeSection, Button, AmountSection } from './style';
import { CloseBar } from '../type/style';

function Money(props) {
  const [amount, setAmount] = useState(0);
  const [amountString, setAmountString] = useState(amount.toString());
  const [itemId, setItemId] = useState(-1);
  const [expenseButtonSelected, setExpenseButtonSelected] = useState(true);

  const onChangeAmount = (newValue) => {
    setAmountString(newValue);
    setAmount(parseFloat(newValue));
  };

  const onOK = () => {
    if (amount === 0) return alert('Input can not be 0');
  };

  const handleClick = (id) => {
    setItemId(id);
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
      <CategoryList
        expenseButtonSelected={expenseButtonSelected}
        itemId={itemId}
        handleClick={handleClick}
      />
      <AmountSection>
        <span>$</span>
        <div>{amountString}</div>
      </AmountSection>
      {/* 显示支出/收入类型区块*/}
      <NumPad value={amountString} onChange={onChangeAmount} onOK={onOK} />
    </StyledMoney>
  );
}

export default Money;