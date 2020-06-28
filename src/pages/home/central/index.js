import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme';
import { DEFAULT_RECORDS } from './record';
import { Category } from '../Money/style';

//首页的中间部分：记录支出/收入详情
function Central() {
  const StyledCentral = styled.div`
    width: 470px;
    z-index: 0;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
    @media (max-width: 500px) {
      width: calc(100vw);
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
  `;

  return (
    <StyledCentral>
      {DEFAULT_RECORDS.map((item) => {
        return (
          <div key={item.id} style={{ borderBottom: '1px solid #000' }}>
            <SectionHeader>{item.date}</SectionHeader>
            <Specification>
              <i
                className={`iconfont ${item.categoryIcon}`}
                style={{
                  fontWeight: 500,
                  marginRight: 8,
                  color: `${theme.$blue}`,
                }}
              />
              <span>{item.category}</span>
              <span style={{ float: 'right' }}>
                {item.type === 'expense' ? '-' : ''}
                <span style={{ marginLeft: 4 }}>{item.amount}</span>
              </span>
            </Specification>
          </div>
        );
      })}
    </StyledCentral>
  );
}

export default Central;
