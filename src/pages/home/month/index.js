import React from 'react';
import styled from 'styled-components';
import { TypeWrapper, CloseBar, Item, ItemWrapper } from '../type/style';
import theme from '../../../static/theme/index';

function SelectMonth(props) {
  const Wrapper = styled(TypeWrapper)``;

  const Year = styled.div`
    height: 30px;
    text-align: center;
    margin-top: ${theme.$dropDownMargin};
    color: #666;
    line-height: 30px;
  `;

  const ItemMonth = styled(Item)`
    line-height: ${theme.$barHeight};
  `;

  return (
    <Wrapper>
      <CloseBar>
        <i className='iconfont' onClick={props.handleSetShowMonth}>
          &#xe687;
        </i>
        <div>Choose Month</div>
      </CloseBar>
      <Year>2020</Year>
      <ItemWrapper>
        <ItemMonth>Jan</ItemMonth>
        <ItemMonth>Feb</ItemMonth>
        <ItemMonth>Mar</ItemMonth>
        <ItemMonth>Apr</ItemMonth>
        <ItemMonth>May</ItemMonth>
        <ItemMonth>June</ItemMonth>
      </ItemWrapper>
    </Wrapper>
  );
}

export default SelectMonth;
