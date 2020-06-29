import React, { useState } from 'react';
import Detail from './Detail';
import styled from 'styled-components';
import theme from '../../../static/theme';

function SingleRecord(props) {
  const Specification = styled.div`
    height: ${theme.$barHeight};
    background: #fff;
    line-height: ${theme.$barHeight};
    font-size: 1em;
    font-weight: 100;
    margin-left: 8px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
    &: hover {
      background: #eee;
    }
  `;

  const record = props.record;
  const [showDetail, setShowDetail] = useState(false);

  const close = () => {
    setShowDetail(false);
  };

  const getDetail = (show) => {
    if (show) {
      return <Detail close={close} record={record} />;
    }
  };

  return (
    <div>
      <Specification onClick={() => setShowDetail(true)}>
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
          {record.type === 'expense' ? '-' : '+'}
          <span style={{ marginLeft: 4 }}>{record.amount}</span>
        </span>
      </Specification>
      {getDetail(showDetail)}
    </div>
  );
}

export default SingleRecord;
