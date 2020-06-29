import styled from 'styled-components';
import theme from '../../../static/theme';

export const StyledMoney = styled.div`
  width: ${theme.$width};
  position: fixed;
  bottom: 0;
  z-index: 20;
  background: #fff;
  button {
    cursor: pointer;
    float: left;
    width: 25%;
    height: 64px;
    background: white;
    font-size: 1.3em;
    outline: none;
    border-radius: 4px;
    border: 4px solid #fafafa;
    &.zero {
      width: 50%;
      color: #000;
    }
    &.OK {
      background: ${theme.$blue};
      opacity: 0.6;
      height: 192px;
      float: right;
      font-size: 1.3em;
      color: #fff;
    }
  }
  @media (max-width: 500px) {
    width: calc(100vw);
  }
`;

export const TypeSection = styled.section`
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    font-size: ${theme.$smallTextSize}
    width: 80px;
    height: 30px;
    border: 1px solid;
    border-radius: 16px;
    margin-right: 10px;
    background: ${theme.$blue};
    color: #fff;
    text-align: center;
    line-height: 30px;
    opacity: 0.6;
    cursor: pointer;
    &.selected {
      opacity: 1;
    }
  `;

export const AmountSection = styled.section`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  > span {
    font-size: 2.5em;
  }
  > div {
    padding-left: 8px;
    flex-grow: 1;
    border: none;
    outline: none;
    height: 64px;
    font-size: 2em;
    line-height: 2em;
    text-align: right;
  }
`;
