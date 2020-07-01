import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';
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

  const StyledItem = styled(Item)``;

  return (
    <Shadow onClick={props.handleSetShow}>
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
                stateTitle={props.stateTitle}
                onClick={() => handleClickItem('All Types', 'icon-type')}
                style={{
                  background: `${
                    props.stateTitle === 'All Types' ? theme.$blue : ''
                  }`,
                }}
              >
                <div
                  style={{
                    color: `${props.stateTitle === 'All Types' ? '#fff' : ''}`,
                  }}
                >
                  <i className={`iconfont icon-type`}></i>
                  <div className='text'>All Types</div>
                </div>
              </StyledItem>
            </ItemWrapper>
          </AllType>
          <OutCome>
            <div className='title'>Expense</div>
            <ItemWrapper>
              {ExpenseList.map((item) => {
                return (
                  <StyledItem
                    key={item.id}
                    onClick={() => handleClickItem(item.name, item.icon)}
                    style={{
                      background: `${
                        props.stateTitle === item.name ? theme.$blue : ''
                      }`,
                    }}
                  >
                    <div
                      style={{
                        color: `${
                          props.stateTitle === item.name ? '#fff' : ''
                        }`,
                      }}
                    >
                      <i className={`iconfont ${item.icon}`}></i>
                      <div className='text'>{item.name}</div>
                    </div>
                  </StyledItem>
                );
              })}
            </ItemWrapper>
          </OutCome>
          <InCome style={{ marginBottom: '25px' }}>
            <div className='title'>Income</div>
            <ItemWrapper>
              {IncomeList.map((item) => {
                return (
                  <StyledItem
                    key={item.id}
                    onClick={() => handleClickItem(item.name, item.icon)}
                    style={{
                      background: `${
                        props.stateTitle === item.name ? theme.$blue : ''
                      }`,
                    }}
                  >
                    <div
                      style={{
                        color: `${
                          props.stateTitle === item.name ? '#fff' : ''
                        }`,
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
    </Shadow>
  );
}

export default Type;
