import styled from 'styled-components';
import theme from '../../../static/theme/index';
import { HeaderWrapper } from '../../../commons/header/style';

export const Wrapper = styled(HeaderWrapper)`
  position: fixed;
  top: 100px;
`;

export const TypeFilter = styled.div`
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

export const MonthFilter = styled.div`
  padding: 18px 18px;
  display: flex;
  span {
    font-size: ${theme.$smallTextSize};
    color: #fff;
    flex: 1;
  }
`;
