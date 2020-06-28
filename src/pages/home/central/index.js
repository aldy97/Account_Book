import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme';
import { DEFAULT_RECORDS } from './record';

//首页的中间部分：记录支出/收入详情
function Central() {
  const StyledCentral = styled.div`
    width: 480px;
    z-index: 0;
    margin-top: 192px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    overflow-y: scroll;
    @media (max-width: 500px) {
      width: calc(100vw);
      margin-left: auto;
      margin-right: auto;
    }
  `;
  const SectionHeader = styled.div`
    background: #fff;
    height: ${theme.$barHeight};
    border-bottom: 1px solid #eee;
    line-height: ${theme.$barHeight};
    margin-left: 8px;
    color: #333;
  `;

  const Specification = styled.div`
    height: ${theme.$barHeight};
    background: #fff;
    line-height: ${theme.$barHeight};
    font-size: 1em;
    margin-left: 8px;
    border-bottom: 1px solid #eee;
  `;

  return (
    <StyledCentral>
      {DEFAULT_RECORDS.map((item) => {
        return (
          <div key={item.id} style={{ borderBottom: '1px solid #000' }}>
            <SectionHeader>{item.date}</SectionHeader>
            {item.recordList.map((record) => {
              return (
                <Specification>
                  <i
                    className={`iconfont ${record.categoryIcon}`}
                    style={{
                      fontWeight: 500,
                      marginRight: `${theme.$marginLeft}`,
                      color: `${theme.$blue}`,
                    }}
                  />
                  <span>{record.category}</span>
                  <span
                    style={{
                      float: 'right',
                      marginRight: `${theme.$marginLeft}`,
                    }}
                  >
                    {record.type === 'expense' ? '-' : ''}
                    <span style={{ marginLeft: 4 }}>{record.amount}</span>
                  </span>
                </Specification>
              );
            })}
          </div>
        );
      })}
    </StyledCentral>
  );
}

export default Central;
