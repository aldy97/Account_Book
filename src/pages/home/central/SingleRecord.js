import React from 'react';
import { Category } from '../categoryList/style';
import Detail from './Detail';
import styled from 'styled-components';
import theme from '../../../static/theme';

function SingleRecord(props) {
  const record = props.record;
  const Specification = styled.div`
    height: ${theme.$barHeight};
    background: #fff;
    line-height: ${theme.$barHeight};
    font-size: 1em;
    font-weight: 100;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  const IconWrapper = styled(Category)`
    width: 10px;
    height: 10px;
    margin-right: 6px;
    margin-left: ${theme.$marginLeft};
    background: ${record.type === 'expense' ? theme.$blue : theme.$orange};
  `;

  const getDetail = (show) => {
    if (show) {
      return <Detail close={props.close} record={record} />;
    }
  };

  return (
    <div>
      <Specification onClick={() => props.setShowDetail(true)}>
        <IconWrapper>
          <i
            className={`iconfont ${record.categoryIcon}`}
            style={{
              fontWeight: 500,
              marginLeft: `${theme.$marginLeft}`,
              marginRight: `${theme.$marginLeft}`,
              color: '#fff',
            }}
          />
        </IconWrapper>

        <span>{record.category}</span>
        <span
          style={{
            float: 'right',
            marginRight: `${theme.$marginLeft}`,
          }}
        >
          {record.type === 'expense' ? '-' : ''}
          <span style={{ marginLeft: 5 }}>{record.amount}</span>
        </span>
      </Specification>
      {getDetail(props.showDetail)}
    </div>
  );
}

export default SingleRecord;
