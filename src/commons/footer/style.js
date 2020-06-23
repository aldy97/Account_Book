import styled from 'styled-components';
import theme from '../../static/theme/index';

export const FooterWrapper = styled.div`
  height: ${theme.$footerHeight};
  width: ${theme.$width};
  border-top: 1px solid #333;
  position: fixed;
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
