import React, { useEffect } from 'react';
import SingleRecord from './SingleRecord';
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
    margin-top: 40px;
    text-align: center;
    font-size: ${theme.$largeTextSize};
    color: #333;
  `;

  const DailyWrapper = styled.div`
    border-bottom: 1px solid #666;
  `;

  const SectionHeader = styled.div`
    background: #fff;
    height: ${theme.$barHeight};
    border-bottom: 1px solid #eee;
    line-height: ${theme.$barHeight};
    margin-left: ${theme.$marginLeft};
    color: #333;
    font-size: ${theme.$smallTextSize};
    span {
      float: right;
      margin-right: ${theme.$marginLeft};
    }
  `;

  const { month, typeId, setExpense, setIncome } = props;

  const filteredMonthList = DEFAULT_RECORDS.filter(
    (item) => item.date.format('MM') === month.format('MM')
  );

  useEffect(() => {
    // console.log(filteredMonthList.length);
    // console.log(hasType(filteredMonthList[0].recordList));
    // console.log(isNotEmptyAfterTypeFilter(filteredMonthList));
    let expense = 0;
    expense += 0;
    let income = 0;
    setExpense(expense);
    setIncome(income);
  });

  return (
    <div style = {{width: 0, overflow:'hidden'}}>
      <StyledCentral>
        {filteredMonthList.length !== 0 ? (
          filteredMonthList.map((item, index) => {
            return (
              <DailyWrapper key={index}>
                <SectionHeader>
                  {item.date.format('MM-DD').toString()}
                </SectionHeader>
                {item.recordList
                  .filter((item) =>
                    typeId === 0 ? item : item.categoryId === typeId
                  )
                  .map((record) => {
                    return <SingleRecord record={record} />;
                  })}
              </DailyWrapper>
            ); 
          })
        ) : (
          <NoData>No data</NoData>
        )}
      </StyledCentral>
      </div>
  );
}

export default Central;
