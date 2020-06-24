import React from 'react';
import styled from 'styled-components';
import { TypeWrapper, CloseBar } from '../type/style';
import theme from '../../../static/theme/index';

function SelectMonth(props) {
  const Wrapper = styled(TypeWrapper)`
    height: ${theme.$selectMonthHeight};
  `;

  const Year = styled.div`
    height: ${theme.$barHeight};
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #666;
  `;

  const MonthSection = styled.div``;

  return (
    <Wrapper>
      <CloseBar>
        <i className='iconfont' onClick={props.handleSetShowMonth}>
          &#xe687;
        </i>
        <div>Choose Month</div>
      </CloseBar>
      <Year>2020</Year>
      <MonthSection></MonthSection>
    </Wrapper>
  );
}

export default SelectMonth;
