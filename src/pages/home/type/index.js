import React from 'react';
import styled from 'styled-components';
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
  const handleClickItem = (name, iconName) => {
    props.setStateTitle(name);
    props.setStateIcon(iconName);
    props.handleSetShow();
  };

  const AllType = styled(OutCome)``;

  return (
    <Shadow>
      <TypeWrapper>
        <CloseBar>
          <i className='iconfont' onClick={props.handleSetShow}>
            &#xe687;
          </i>
        </CloseBar>
        <div className='in-out'>
          <AllType>
            <ItemWrapper
              onClick={() => handleClickItem('All Types', 'icon-type')}
            >
              <Item>
                <i className={`iconfont icon-type`}></i>
                <div className='text'>All Types</div>
              </Item>
            </ItemWrapper>
          </AllType>
          <OutCome>
            <div className='title'>Expense</div>
            <ItemWrapper>
              {ExpenseList.map((item) => {
                return (
                  <Item
                    key={item.id}
                    onClick={() => handleClickItem(item.name, item.icon)}
                  >
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
                  <Item
                    key={item.id}
                    onClick={() => handleClickItem(item.name, item.icon)}
                  >
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
