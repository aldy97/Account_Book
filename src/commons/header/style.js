import styled from 'styled-components';
import theme from '../../static/theme/index';

export const HeaderWrapper = styled.div`
  height: 100px;
  background: ${theme.$blue};
  color: rgb(237, 245, 237);
  .title {
    height: auto;
    font-size: ${theme.$largeTextSize};
    text-align: center;
    line-height: 100px;
  }
`;
