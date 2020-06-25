import React, { useState } from 'react';
import theme from '../../../static/theme/index';
import styled from 'styled-components';
import { CloseBar } from '../type/style';

function NumberPad(props) {
  const [expenseButtonSelected, setExpenseButtonSelected] = useState(true);
  const StyledNumberPad = styled.div`
    width: ${theme.$width};
    position: fixed;
    bottom: 0;
    z-index: 20;
    background: #fff;
    button {
      cursor: pointer;
      float: left;
      width: 25%;
      height: 64px;
      background: white;
      font-size: 1.3em;
      outline: none;
      border-radius: 4px;
      border: 4px solid #fafafa;
      &.zero {
        width: 50%;
        color: #000;
      }
      &.OK {
        background: ${theme.$blue};
        opacity: 0.6;
        height: 192px;
        float: right;
        font-size: 1.3em;
        color: #fff;
      }
    }
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  const TypeSection = styled.section`
    padding: 16px;
    display: flex;
    align-items: center;
  `;

  const Button = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    font-size: ${theme.$smallTextSize}
    width: 80px;
    height: 30px;
    border: 1px solid;
    border-radius: 16px;
    margin-right: 10px;
    background: ${theme.$blue};
    color: #fff;
    text-align: center;
    line-height: 30px;
    opacity: 0.6;
    cursor: pointer;
    &.selected {
      opacity: 1;
    }
  `;

  const AmountSection = styled.section`
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    > span {
      font-size: 2.5em;
    }
    > div {
      padding-left: 8px;
      flex-grow: 1;
      border: none;
      outline: none;
      height: 64px;
      font-size: 2em;
      line-height: 2em;
      text-align: right;
    }
  `;

  const CategoryList = styled.ul`
    padding: 24px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    list-style: none;
    &::-webkit-scrollbar {
      width: 0;
    }
  `;

  const CategoryItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  `;

  // 灰色圆形
  const Category = styled.span`
    padding: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border-radius: 50%;
  `;

  const CategoryText = styled.span`
    font-size: 0.8em;
    margin-top: 8px;
    color: ${theme.$smallTextSize};
    word-break: keep-all;
  `;

  const ExpenseList = [
    'Clothing',
    'Groceries',
    'Diner',
    'Investment',
    'Commuting',
    'Social',
    'Communication',
    'Medical',
    'Pets',
    'Cars',
    'Entertainment',
    'Office',
    'Maintainance',
    'Sports',
    'Housing',
    'Donation',
    'Fruits',
    'Wine',
    'Travel',
    'Gifts',
    'Books',
  ];

  const IncomeList = ['Salary', 'Investment', 'Cash Gift', 'Part time'];

  const list = expenseButtonSelected ? ExpenseList : IncomeList;

  return (
    <StyledNumberPad>
      <CloseBar
        style={{ border: '1px solid #eee', position: 'static' }}
        onClick={props.handleSetShowNumPad}
      >
        <i className='iconfont' style={{ marginLeft: 12 }}>
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
        <div></div>
      </AmountSection>
      {/* 显示支出/收入类型区块*/}
      <CategoryList>
        {list.map((item, index) => {
          return (
            <CategoryItem key={index}>
              <Category></Category>
              <CategoryText>{item}</CategoryText>
            </CategoryItem>
          );
        })}
      </CategoryList>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>DEL</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='OK'>OK</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>

      <button className='zero'>0</button>
      <button>.</button>
    </StyledNumberPad>
  );
}

export default NumberPad;
