import styled from 'styled-components';
import theme from '../../static/theme/index';

export const FooterWrapper = styled.div`
  height: ${theme.$footerHeight};
  width: ${theme.$width};
  background: white;
  border-top: 2px solid #eee;
  box-shadow: 0px -2px 12px 0px rgba(192, 196, 204, 0.4);
  position: fixed;
  z-index: 10;
  bottom: 0;
  display: flex;
  @media (max-width: 500px) {
    width: calc(100vw);
  }
  .navItem {
    height: ${theme.$footerHeight};
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  .iconfont {
    font-size: 25px;
    display: block;
    height: 40px;
    line-height: 50px;
    bottom: 0;
  }
  .text {
    height: 24px;
  }
  .isSelected {
    color: ${theme.$blue};
  }
`;
