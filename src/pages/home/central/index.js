import React from 'react';
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

  const { month, typeId } = props;

  const filteredMonthList = DEFAULT_RECORDS.filter(
    (item) => item.date.format('MM') === month.format('MM')
  );

  //检查当天的recordList中是否有所选的类型
  const hasSelectedType = (daily) => {
    if (typeId === 0) {
      return true;
    } else {
      return daily.recordList.filter((item) => item.categoryId === typeId)
        .length === 0
        ? false
        : true;
    }
  };

  //检查当前选中的月份是否有所选的类型
  const hasTypeInThisMonth = (list) => {
    if (list.filter((daily) => hasSelectedType(daily)).length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <StyledCentral>
      {filteredMonthList.length !== 0 &&
      hasTypeInThisMonth(filteredMonthList) ? (
        filteredMonthList.map((item, index) => {
          return (
            <Daily
              key={index}
              item={item}
              typeId={typeId}
              hasSelectedType={hasSelectedType}
            />
          );
        })
      ) : (
        <NoData>----No data----</NoData>
      )}
    </StyledCentral>
  );
}

export default Central;
