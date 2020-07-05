import React, { useEffect } from 'react';
import Daily from './daily';
import styled from 'styled-components';
import theme from '../../../static/theme';
import { DEFAULT_RECORDS } from './record';

//首页的中间部分：记录支出/收入详情
function Central(props) {
  const StyledCentral = styled.div`
    position: fixed;
    top: 200px;
    bottom: 73px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: ${theme.$width};
    z-index: 0;
    background: #fff;
  `;

  const NoData = styled.div`
    margin-top: 100px;
    text-align: center;
    font-size: ${theme.$largeTextSize};
    color: #666;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  const { month, typeId, setExpense, setIncome } = props;

  const filteredMonthList = DEFAULT_RECORDS.filter(
    (item) => item.date.format('MM') === month.format('MM')
  );

  useEffect(() => {
    let expense = 0;
    expense += 0;
    let income = 0;
    setExpense(expense);
    setIncome(income);
  });

  return (
    <StyledCentral>
      {filteredMonthList.length !== 0 ? (
        filteredMonthList.map((item, index) => {
          return <Daily key={index} item={item} typeId={typeId} />;
        })
      ) : (
        <NoData>----No data----</NoData>
      )}
    </StyledCentral>
  );
}

export default Central;
