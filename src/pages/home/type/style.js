import styled from 'styled-components';
import theme from '../../../static/theme/index';
export const TypeWrapper = styled.div`
  height: calc(60vh);
  width: ${theme.$width};
  position: absolute;
  bottom: 0;
  border-top: 1px solid black;
  background: ${theme.$white};
`;

export const CloseBar = styled.div`
  width: ${theme.$width};
  height: ${theme.$barHeight};
  border-bottom: 1px solid black;
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
  width: ${theme.$width};
  .title {
    margin-left: 8px;
    margin-top: 8px;
    font-size: ${theme.$middleTextSize};
  }
`;

export const InCome = styled(OutCome)``;

export const ItemWrapper = styled.div`
  width: ${theme.$width};
  display: flex;
`;

export const Item = styled.div`
  flex: 1;
  height: ${theme.$barHeight};
  border: 1px solid black;
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
