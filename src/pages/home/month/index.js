import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { TypeWrapper, CloseBar, Item, ItemWrapper } from '../type/style';
import { Shadow } from '../type/style';
import theme from '../../../static/theme/index';

function SelectMonth(props) {
  const Wrapper = styled(TypeWrapper)``;

  const Year = styled.div`
    text-align: center;
    margin-top: ${theme.$dropDownMargin};
    color: #666;
    line-height: 30px;
  `;

  const thisYear = dayjs();

  const ItemMonth = styled(Item)`
    line-height: ${theme.$barHeight};
  `;

  const ChooseMonth = styled.span`
    margin-left: 29%;
  `;

  const getPrevMonths = () => {
    const DURATION = thisYear.month() + 1;

    return [...Array(DURATION)].map((_, index) =>
      dayjs().subtract(index, 'month')
    );
  };

  const prevMonths = getPrevMonths();
  const thisYearMonths = prevMonths.filter((m) => m.isSame(thisYear, 'year'));

  return (
    <Shadow>
      <Wrapper>
        <CloseBar>
          <i
            className='iconfont icon-cha'
            onClick={props.handleSetShowMonth}
            style={{ marginLeft: `${theme.$marginLeft}` }}
          />
          <ChooseMonth>Choose Month</ChooseMonth>
        </CloseBar>
        <Year style={{ marginTop: 60 }}>{thisYear.get('year')}</Year>
        <ItemWrapper>
          {thisYearMonths.map((m) => (
            <ItemMonth>{m.get('month') + 1}</ItemMonth>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Shadow>
  );
}

export default SelectMonth;
