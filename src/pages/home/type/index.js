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
            <i className='iconfont 采购'>&#xe603;</i>
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
            <i className='iconfont'>&#xe644;</i>
            <div className='text'>Social</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe647;</i>
            <div className='text'>Communication</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe64d;</i>
            <div className='text'>Medical</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe64f;</i>
            <div className='text'>Pets</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe651;</i>
            <div className='text'>Cars</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe620;</i>
            <div className='text'>Entertainment</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe604;</i>
            <div className='text'>Office</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe633;</i>
            <div className='text'>Maintainance</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe63a;</i>
            <div className='text'>Sports</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe63b;</i>
            <div className='text'>Housing</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe61d;</i>
            <div className='text'>Donation</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe613;</i>
            <div className='text'>Fruits</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe614;</i>
            <div className='text'>Wine & Cig</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe60b;</i>
            <div className='text'>Travel</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe697;</i>
            <div className='text'>Gifts</div>
          </Item>
          <Item>
            <i className='iconfont 饮料'>&#xe625;</i>
            <div className='text'>Books</div>
          </Item>
        </ItemWrapper>
      </OutCome>
      <InCome>
        <div className='title'>Income</div>
        <ItemWrapper>
          <Item>
            <i className='iconfont 工资'>&#xe615;</i>
            <div className='text'>Salary</div>
          </Item>
          <Item>
            <i className='iconfont 股票'>&#xe652;</i>
            <div className='text'>Investment</div>
          </Item>
          <Item>
            <i className='iconfont 礼金'>&#xe667;</i>
            <div className='text'>Cash Gift</div>
          </Item>
          <Item>
            <i className='iconfont 礼金'>&#xe65d;</i>
            <div className='text'>Part time</div>
          </Item>
        </ItemWrapper>
      </InCome>
    </TypeWrapper>
  );
}

export default Type;
