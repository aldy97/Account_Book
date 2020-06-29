import React from 'react';
import SingleRecord from './SingleRecord';
import styled from 'styled-components';
import theme from '../../../static/theme';
import { DEFAULT_RECORDS } from './record';

//首页的中间部分：记录支出/收入详情
function Central() {
  const StyledCentral = styled.div`
    width: ${theme.$width};
    z-index: 0;
    margin-top: 192px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    @media (max-width: 500px) {
      width: calc(100vw);
      float: left;
    }
  `;
  const SectionHeader = styled.div`
    background: #fff;
    height: ${theme.$barHeight};
    border-bottom: 1px solid #eee;
    line-height: ${theme.$barHeight};
    margin-left: 8px;
    color: #333;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  const DailyWrapper = styled.div`
    border-bottom: 1px solid #666;
  `;

  return (
    <StyledCentral>
      {DEFAULT_RECORDS.map((item) => {
        return (
          <DailyWrapper key={item.id}>
            <SectionHeader>{item.date}</SectionHeader>
            {item.recordList.map((record) => {
              return <SingleRecord record={record}></SingleRecord>;
            })}
          </DailyWrapper>
        );
      })}
    </StyledCentral>
  );
}

export default Central;
