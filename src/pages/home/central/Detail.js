import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { CloseBar } from '../type/style';

//点击Central部分单笔记录后弹出的详情
function Detail(props) {
  const StyledDetail = styled.div`
    width: ${theme.$width};
    height: calc(100vh);
    position: fixed;
    z-index: 12;
    top: 0;
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
    text-align: center;
  `;

  const Header = styled.div`
    font-size: ${theme.$middleTextSize};
    margin-bottom: 20px;
    i {
      margin-right: 20px;
      font-weight: 600;
      color: ${theme.$blue}
  `;

  const Amount = styled.div`
    font-size: ${theme.$largeTextSize};
  `;

  const record = props.record;

  return (
    <StyledDetail>
      <CloseBar>
        <i className='iconfont icon-cha' onClick={props.close} />
      </CloseBar>

      <DetailSection>
        <Header>
          <i className={`iconfont ${record.categoryIcon}`} /> {record.category}
        </Header>
        <Amount>
          {record.type === 'expense' ? '-' : '+'} {record.amount}
        </Amount>
      </DetailSection>
    </StyledDetail>
  );
}

export default Detail;
