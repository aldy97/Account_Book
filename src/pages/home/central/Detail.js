import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { CloseBar } from '../type/style';
import { Category } from '../categoryList/style';

//点击单笔记录SingleRecord后弹出的详情
function Detail(props) {
  const StyledDetail = styled.div`
    width: ${theme.$width};
    height: calc(100vh);
    position: fixed;
    z-index: 12;
    top: 192px;
    background: #eee;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  const DetailSection = styled.div`
    margin: 20px;
    margin-top: 55px;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    padding: 20px;
    padding-bottom: 0px;
    text-align: center;
    div {
      margin-bottom: 20px;
    }
  `;

  const Header = styled.div`
    font-size: ${theme.$middleTextSize};
    i {
      margin-right: 20px;
      font-weight: 600;
      color: ${theme.$blue}
  `;

  const Amount = styled.div`
    font-size: ${theme.$largeTextSize};
  `;

  const Bottom = styled.div`
    height: ${theme.$barHeight};
    border-top: 1px solid #eee;
    line-height: ${theme.$barHeight};
    display: flex;
    span {
      flex: 1;
      cursor: pointer;
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

  return (
    <StyledDetail>
      <CloseBar>
        <i className='iconfont icon-cha' onClick={props.close} />
      </CloseBar>

      <DetailSection>
        <Header>
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
          {record.category}
        </Header>
        <Amount>
          {record.type === 'expense' ? '-' : '+'} {record.amount}
        </Amount>
        <Bottom>
          <span style={{ color: 'red' }}>
            <i className='iconfont icon-shanchu'></i>
            Delete
          </span>
          <span>
            <i className='iconfont icon-bianji'></i>Edit
          </span>
        </Bottom>
      </DetailSection>
    </StyledDetail>
  );
}

export default Detail;
