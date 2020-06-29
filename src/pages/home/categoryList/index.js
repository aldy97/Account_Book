import React from 'react';
import theme from '../../../static/theme';
import {
  StyledCategoryList,
  CategoryItem,
  Category,
  CategoryText,
} from './style';
import { ExpenseList, IncomeList } from '../../../static/itemList';

function CategoryList(props) {
  const list = props.expenseButtonSelected ? ExpenseList : IncomeList;
  return (
    <StyledCategoryList>
      {list.map((item) => (
        <CategoryItem key={item.id} onClick={() => props.handleClick(item.id)}>
          <Category
            style={{
              background: `${item.id === props.itemId ? theme.$blue : ''}`,
            }}
          >
            <i
              className={`iconfont ${item.icon}`}
              style={{
                color: `${item.id === props.itemId ? '#fff' : '#333'}`,
              }}
            />
          </Category>
          <CategoryText>{item.name}</CategoryText>
        </CategoryItem>
      ))}
    </StyledCategoryList>
  );
}

export default CategoryList;
