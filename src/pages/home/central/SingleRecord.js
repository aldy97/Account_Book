import React, { useState } from 'react';
import { Category } from '../categoryList/style';
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
    border-bottom: 1px solid #eee;
    cursor: pointer;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  const IconWrapper = styled(Category)`
    width: 10px;
    height: 10px;
    background: ${theme.$blue};
    margin-right: 6px;
    margin-left: ${theme.$marginLeft};
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
      {getDetail(showDetail)}
    </div>
  );
}

export default SingleRecord;
