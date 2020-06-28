import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { CloseBar } from '../type/style';

//点击Central部分单笔记录后弹出的详情
function Detail(props) {
  const StyledDetail = styled.div`
    position: fixed;
    z-index: 12;
    top: 0;
    width: ${theme.$width};
    height: calc(100vh);
    background: #eee;
  `;

  const DetailSection = styled.div`
    margin-top: 55px;
    background: #fff;
    height: 300px;
    width: 440px;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <StyledDetail>
      <CloseBar>
        <i className='iconfont icon-cha' onClick={props.close} />
      </CloseBar>
      <DetailSection>{props.record.category}</DetailSection>
    </StyledDetail>
  );
}

export default Detail;
