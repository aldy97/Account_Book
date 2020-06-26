import styled from 'styled-components';
import theme from '../../../static/theme/index';
export const TypeWrapper = styled.div`
  width: 478px;
  height: calc(100vh);
  overflow: scroll;
  position: fixed;
  top: 100;
  z-index: 20;
  border: 1px solid #eee;
  box-shadow: 0px -2px 12px 0px rgba(192, 196, 204, 0.4);
  background: ${theme.$white};
  .in-out {
    overflow: hidden;
    margin-top: ${theme.$barHeight};
  }
  @media (max-width: 500px) {
    width: calc(100vw);
    bottom: 0;
    .in-out {
      margin-top: 0;
    }
  }
`;

export const CloseBar = styled.div`
  height: ${theme.$barHeight};
  width: ${theme.$width};
  background: #eee;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  i {
    font-size: 30px;
    color: #666;
    line-height: ${theme.$barHeight};
    margin-left: 6px;
    cursor: pointer;
  }
  i: hover {
    color: #000;
  }
  div {
    display: inline-block;
    height: ${theme.$barHeight};
    margin-left: 25%;
  }
  @media (max-width: 500px) {
    width: calc(100vw);
    position: static;
  }
`;

export const OutCome = styled.div`
  .title {
    margin-left: 3.8%;
    margin-top: 3.8%;
    font-size: ${theme.$middleTextSize};
    color: ${theme.$blue};
  }
`;

export const InCome = styled(OutCome)``;

export const ItemWrapper = styled.div`
  background: #fff;
  width: ${theme.$width};
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: calc(100vw);
  }
`;

export const Item = styled.div`
  width: 25%;
  height: ${theme.$barHeight};
  background: #eee;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 3.8%;
  text-align: center;
  cursor: pointer;
  i {
    height: 20px;
    display: block;
    font-size: 30px;
    line-height: ${theme.$barHeight};
    margin-top: -6px;
  }
  .text {
    font-size: ${theme.$smallTextSize};
    margin-top: 16px;
  }
`;
