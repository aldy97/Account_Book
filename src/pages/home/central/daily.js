import React from 'react';
import SingleRecord from './SingleRecord';
import styled from 'styled-components';
import theme from '../../../static/theme';

function Daily(props) {
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

  const { item, typeId } = props;

  const hasSelectedType = (daily) => {
    if (typeId === 0) {
      console.log('show all types');
      return true;
    } else {
      return daily.recordList.filter((item) => item.categoryId === typeId)
        .length === 0
        ? false
        : true;
    }
  };

  return hasSelectedType(item) ? (
    <DailyWrapper>
      <SectionHeader>{item.date.format('MM-DD').toString()}</SectionHeader>
      {item.recordList
        .filter((item) => (typeId === 0 ? item : item.categoryId === typeId))
        .map((record) => {
          return <SingleRecord record={record} key={record.id} />;
        })}
    </DailyWrapper>
  ) : (
    <div></div>
  );
}

export default Daily;
