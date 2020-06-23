import React from 'react';
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
      <OutCome>
        <div className='title'>Outcome</div>
        <ItemWrapper>
          <Item>
            <i className='iconfont 衣服'>&#xe646;</i>
            <div className='text'>Clothing</div>
          </Item>
          <Item>
            <i className='iconfont 采购'>&#xe60f;</i>
            <div className='text'>Groceries</div>
          </Item>
          <Item>
            <i className='iconfont 外食'>&#xe68a;</i>
            <div className='text'>Dine-out</div>
          </Item>
          <Item>
            <i className='iconfont 股票'>&#xe652;</i>
            <div className='text'>Investment</div>
          </Item>
          <Item>
            <i className='iconfont 交通'>&#xe611;</i>
            <div className='text'>Commuting</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe61c;</i>
            <div className='text'>Drinks</div>
          </Item>
        </ItemWrapper>
      </OutCome>
      <InCome>
        <div className='title'>Income</div>
      </InCome>
    </TypeWrapper>
  );
}

export default Type;
