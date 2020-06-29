import styled from 'styled-components';
import theme from '../../../static/theme';

export const StyledCategoryList = styled.ul`
  height: 100px;
  display: flex;
  padding-left: 24px;
  align-items: center;
  overflow-x: auto;
  list-style: none;
  border: 1px solid black;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

// 灰色圆形
export const Category = styled.span`
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  border-radius: 50%;
`;

export const CategoryText = styled.span`
  font-size: 0.6em;
  font-weight: 300;
  margin-top: 9px;
  color: ${theme.$smallTextSize};
  word-break: keep-all;
`;
