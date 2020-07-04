import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { ExpenseList, IncomeList } from '../../../static/itemList';
import {
  TypeWrapper,
  CloseBar,
  Expense,
  InCome,
  ItemWrapper,
  Item,
  Shadow,
} from './style';

function Type(props) {
  const handleClickItem = (id) => {
    props.setTypeId(id);
    props.handleSetShow();
  };

  const AllType = styled(Expense)``;

  const StyledItem = styled(Item)``;

  const StyledShadow = styled(Shadow)`
    width: 100%;
    overflow-y: scroll;
    padding-right: 17px;
    box-sizing: content-box;
  `;

  return (
    <div style={{ overflow: 'hidden' }}>
      <StyledShadow>
        <TypeWrapper>
          <CloseBar>
            <i className='iconfont' onClick={props.handleSetShow}>
              &#xe687;
            </i>
          </CloseBar>
          <div className='in-out'>
            <AllType>
              <ItemWrapper>
                <StyledItem
                  onClick={() => handleClickItem(0)}
                  style={{
                    background: `${props.typeId === 0 ? theme.$blue : ''}`,
                  }}
                >
                  <div
                    style={{
                      color: `${props.typeId === 0 ? '#fff' : ''}`,
                    }}
                  >
                    <i className={`iconfont icon-type`}></i>
                    <div className='text'>All Types</div>
                  </div>
                </StyledItem>
              </ItemWrapper>
            </AllType>
            <Expense>
              <div className='expense'>Expense</div>
              <ItemWrapper>
                {ExpenseList.map((item) => {
                  return (
                    <StyledItem
                      key={item.id}
                      onClick={() => handleClickItem(item.id)}
                      style={{
                        background: `${
                          props.typeId === item.id ? theme.$blue : ''
                        }`,
                      }}
                    >
                      <div
                        style={{
                          color: `${props.typeId === item.id ? '#fff' : ''}`,
                        }}
                      >
                        <i className={`iconfont ${item.icon}`}></i>
                        <div className='text'>{item.name}</div>
                      </div>
                    </StyledItem>
                  );
                })}
              </ItemWrapper>
            </Expense>
            <InCome style={{ marginBottom: '25px' }}>
              <div className='income'>Income</div>
              <ItemWrapper>
                {IncomeList.map((item) => {
                  return (
                    <StyledItem
                      key={item.id}
                      onClick={() => handleClickItem(item.id)}
                      style={{
                        background: `${
                          props.typeId === item.id ? theme.$orange : ''
                        }`,
                      }}
                    >
                      <div
                        style={{
                          color: `${props.typeId === item.id ? '#fff' : ''}`,
                        }}
                      >
                        <i className={`iconfont ${item.icon}`}></i>
                        <div className='text'>{item.name}</div>
                      </div>
                    </StyledItem>
                  );
                })}
              </ItemWrapper>
            </InCome>
          </div>
        </TypeWrapper>
      </StyledShadow>
    </div>
  );
}

export default Type;
