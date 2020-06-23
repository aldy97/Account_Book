import styled from 'styled-components';
import theme from '../../static/theme/index';

export const HeaderWrapper = styled.div`
  width: ${theme.$width};
  height: 100px;
  position: fixed;
  top: 0;
  background: ${theme.$blue};
  color: rgb(237, 245, 237);
  .title {
    height: auto;
    font-size: ${theme.$largeTextSize};
    text-align: center;
    line-height: 100px;
  }
  @media (max-width: 500px) {
    width: calc(100vw);
  }
`;
