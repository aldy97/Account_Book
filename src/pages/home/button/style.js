import styled from 'styled-components';
import theme from '../../../static/theme/index';

export const ButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #fff;
  background: white;
  box-shadow: 0 2px 24px -6px #666;
  border-radius: 50%;
  text-align: center;
  position: fixed;
  bottom: 100px;
  z-index: 10;
  i {
    font-size: 25px;
    color: ${theme.$blue};
  }
  @media (max-width: 500px) {
    left: calc(80vw);
  }
`;
