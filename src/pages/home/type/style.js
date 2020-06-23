import styled from 'styled-components';
import theme from '../../../static/theme/index';
export const TypeWrapper = styled.div`
  width: ${theme.$width};
  position: absolute;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 5px;
  bottom: 72px;
  background: ${theme.$white};
  @media (max-width: 500px) {
    width: calc(100vw);
  }
`;

export const CloseBar = styled.div`
  height: ${theme.$barHeight};
  border-bottom: 1px solid #666;
  i {
    font-size: 30px;
    color: #666;
    line-height: ${theme.$barHeight};
    margin-left: 2px;
    cursor: pointer;
  }
  i: hover {
    color: #000;
  }
`;

export const OutCome = styled.div`
  .title {
    margin-left: 8px;
    margin-top: 8px;
    font-size: ${theme.$middleTextSize};
    color: ${theme.$blue};
  }
`;

export const InCome = styled(OutCome)``;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  flex-grow: 1;
  width: 25%;
  height: ${theme.$barHeight};
  border: 1px solid black;
  border-radius: 5px;
  margin: 8px;
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
