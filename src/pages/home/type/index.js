import React from 'react';
import { ExpenseList, IncomeList } from '../../../static/itemList';
import {
  TypeWrapper,
  CloseBar,
  OutCome,
  InCome,
  ItemWrapper,
  Item,
} from './style';

function Type(props) {
  return (
    <TypeWrapper>
      <CloseBar>
        <i className='iconfont' onClick={props.handleSetShow}>
          &#xe687;
        </i>
      </CloseBar>
      <div className='in-out'>
        <OutCome>
          <div className='title'>Outcome</div>
          <ItemWrapper>
            {ExpenseList.map((item) => {
              return (
                <Item>
                  <i className={`iconfont ${item[1]}`}></i>
                  <div className='text'>{item[0]}</div>
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
                <Item>
                  <i className={`iconfont ${item[1]}`}></i>
                  <div className='text'>{item[0]}</div>
                </Item>
              );
            })}
          </ItemWrapper>
        </InCome>
      </div>
    </TypeWrapper>
  );
}

export default Type;
