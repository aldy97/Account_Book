import React from 'react';
import theme from '../../../static/theme';
import {
  StyledCategoryList,
  CategoryItem,
  Category,
  CategoryText,
} from '../Money/style';
import { ExpenseList, IncomeList } from '../../../static/itemList';

function CategoryList(props) {
  const list = props.expenseButtonSelected ? ExpenseList : IncomeList;
  const itemID = props.itemId;
  return (
    <StyledCategoryList>
      {list.map((item) => (
        <CategoryItem key={item.id} onClick={() => props.handleClick(item.id)}>
          <Category>
            <i
              className={`iconfont ${item.icon}`}
              style={{
                color: `${item.id === itemID ? theme.$blue : '#000'}`,
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
