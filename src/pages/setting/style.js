import styled from 'styled-components';
import theme from '../../static/theme/index';

export const Item = styled.div`
  width: ${theme.$width};
  height: ${theme.$barHeight};
  background: #fff;
  line-height: ${theme.$barHeight};
  border-bottom: 1px solid #eee;
  cursor: pointer;
  @media (max-width: 500px) {
    width: calc(100vw);
  }
  i {
    width: 40px;
    font-size: 30px;
    margin-right: 8px;
    margin-left: 8px;
  }
`;
