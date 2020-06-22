import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height: 72px;
  width: 480px;
  border-top: 1px solid black;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  .navItem {
    height: 72px;
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  .iconfont {
    font-size: 20px;
    margin-right: 6px;
    display: block;
    height: 40px;
    line-height: 50px;
    bottom: 0;
  }
  .text {
    height: 24px;
  }
  .isSelected {
    color: blue;
  }
`;
