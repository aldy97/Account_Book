import React, { useState } from 'react';
import CategoryList from '../categoryList/index';
import theme from '../../../static/theme/index';
import NumPad from '../numPad/index';
import { StyledMoney, TypeSection, Button, AmountSection } from './style';
import { CloseBar } from '../type/style';

//点击悬浮按钮之后弹出的界面：包含类型/项目以及数目选择
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
          className={expenseButtonSelected ? 'selected' : ''}
          style={{ background: `${theme.$blue}` }}
          onClick={() => {
            setExpenseButtonSelected(!expenseButtonSelected);
          }}
        >
          Expense
        </Button>
        <Button
          className={expenseButtonSelected ? '' : 'selected'}
          style={{ background: `${theme.$orange}` }}
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
        type={expenseButtonSelected}
      />
      <AmountSection>
        <span>$</span>
        <div>{amountString}</div>
      </AmountSection>
      {/* 显示支出/收入类型区块*/}
      <NumPad
        value={amountString}
        onChange={onChangeAmount}
        onOK={onOK}
        type={expenseButtonSelected}
      />
    </StyledMoney>
  );
}

export default Money;
