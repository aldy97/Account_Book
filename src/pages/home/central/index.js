import React, { useState } from 'react';
import SingleRecord from './SingleRecord';
import styled from 'styled-components';
import theme from '../../../static/theme';
import { DEFAULT_RECORDS } from './record';

//首页的中间部分：记录支出/收入详情
function Central() {
  const [showDetail, setShowDetail] = useState(false);
  const StyledCentral = styled.div`
    position: fixed;
    top: 200px;
    bottom: 73px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: ${theme.$width};
    z-index: ${showDetail ? '15' : '0'};
    background: #fff;
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
  `;

  const close = () => {
    setShowDetail(false);
  };

  return (
    <StyledCentral>
      {DEFAULT_RECORDS.map((item) => {
        return (
          <DailyWrapper key={item.id}>
            <SectionHeader>{item.date}</SectionHeader>
            {item.recordList.map((record) => {
              return (
                <SingleRecord
                  record={record}
                  showDetail={showDetail}
                  close={close}
                  setShowDetail={setShowDetail}
                ></SingleRecord>
              );
            })}
          </DailyWrapper>
        );
      })}
    </StyledCentral>
  );
}

export default Central;
