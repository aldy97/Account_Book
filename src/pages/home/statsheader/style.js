import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { HeaderWrapper } from '../../../commons/header/style';

export const Wrapper = styled(HeaderWrapper)`
  position: fixed;
  top: 100px;
`;

export const ButtonWrapper = styled.div`
  width: ${theme.$buttonWidth};
  height: ${theme.$buttonHeight};
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  margin-left: ${theme.$marginLeft};
  div {
    flex: 2;
    text-align: center;
    line-height: ${theme.$buttonHeight};
    border-right: 1px solid #fff;
  }
  i {
    flex: 1;
    font-size: ${theme.$largeTextSize};
    text-align: center;
    line-height: ${theme.$buttonHeight};
    font-weight: 500;
  }
`;

export const DateWrapper = styled.div`
  height: 45px;
  margin-top: 8px;
  margin-left: ${theme.$marginLeft};
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
    .outcome {
      margin-right: 6px;
    }
  }
  @media (max-width: 500px) {
    .out-income {
      font-size: 2px;
    }
  }
`;
