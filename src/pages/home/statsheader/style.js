import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { HeaderWrapper } from '../../../commons/header/style';

export const Wrapper = styled(HeaderWrapper)`
  padding-left: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 135px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  div {
    flex: 2;
    text-align: center;
    line-height: 35px;
    border-right: 1px solid #fff;
  }
  i {
    flex: 1;
    font-size: ${theme.$largeTextSize};
    text-align: center;
    line-height: 35px;
    font-weight: 500;
  }
`;

export const DateWrapper = styled.div`
  height: 45px;
  margin-top: 8px;
  margin-left: 15px;
  line-height: 45px;
  display: flex;
  .date {
    flex: 1;
    cursor: pointer;
    font-size: ${theme.$middleTextSize};
    i {
      margin-left: 4px;
    }
  }
  .out-income {
    flex: 2;
    font-size: ${theme.$smallTextSize};
    font-weight: 300;
    .outcome {
      margin-right: 6px;
    }
  }
`;
