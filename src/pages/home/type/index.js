import React from 'react';
import { ExpenseList, IncomeList } from '../../../static/itemList';
import {
  TypeWrapper,
  CloseBar,
  OutCome,
  InCome,
  ItemWrapper,
  Item,
  Shadow,
} from './style';

function Type(props) {
  return (
    <Shadow>
      <TypeWrapper>
        <CloseBar>
          <i className='iconfont' onClick={props.handleSetShow}>
            &#xe687;
          </i>
        </CloseBar>
        <div className='in-out'>
          <OutCome>
            <div className='title'>Expense</div>
            <ItemWrapper>
              {ExpenseList.map((item) => {
                return (
                  <Item key={item.id}>
                    <i className={`iconfont ${item.icon}`}></i>
                    <div className='text'>{item.name}</div>
                  </Item>
                );
              })}
            </ItemWrapper>
          </OutCome>
          <InCome style={{ marginBottom: '25px' }}>
            <div className='title'>Income</div>
            <ItemWrapper>
              {IncomeList.map((item) => {
                return (
                  <Item key={item.id}>
                    <i className={`iconfont ${item.icon}`}></i>
                    <div className='text'>{item.name}</div>
                  </Item>
                );
              })}
            </ItemWrapper>
          </InCome>
        </div>
      </TypeWrapper>
    </Shadow>
  );
}

export default Type;
