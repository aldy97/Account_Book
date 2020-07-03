import styled from 'styled-components';
import theme from '../../../static/theme/index';
export const TypeWrapper = styled.div`
  width: 478px;
  height: calc(75vh);
  overflow: scroll;
  position: fixed;
  top: 200px;
  z-index: 20;
  border: 1px solid #eee;
  background: ${theme.$white};
  .in-out {
    overflow: hidden;
    margin-top: ${theme.$barHeight};
  }
  @media (max-width: 500px) {
    width: calc(100vw);
  }
`;

export const CloseBar = styled.div`
  height: ${theme.$barHeight};
  width: 478px;
  background: #eee;
  position: fixed;
  i {
    font-size: 30px;
    color: #666;
    line-height: ${theme.$barHeight};
    cursor: pointer;
    margin-left: ${theme.$marginLeft};
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
  }
`;

export const Expense = styled.div`
  .expense {
    margin-left: 3.8%;
    margin-top: 3.8%;
    font-size: ${theme.$middleTextSize};
    color: ${theme.$blue};
  }
`;

export const InCome = styled(Expense)`
  .income {
    margin-left: 3.8%;
    margin-top: 3.8%;
    font-size: ${theme.$middleTextSize};
    color: ${theme.$orange};
  }
`;

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
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 3.8%;
  margin-bottom: 0;
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

export const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  z-index: 12;
  background: rgba(0, 0, 0, 0.5);
`;
