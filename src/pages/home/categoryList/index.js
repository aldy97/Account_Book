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
  return (
    <StyledCategoryList>
      {list.map((item) => {
        return (
          <CategoryItem
            key={item.id}
            onClick={() => props.handleClick(item.id)}
          >
            <Category>
              <i
                className={`iconfont ${item.icon}`}
                style={{
                  color: `${item.id === props.itemId ? theme.$blue : 'null'}`,
                }}
              />
            </Category>
            <CategoryText>{item.name}</CategoryText>
          </CategoryItem>
        );
      })}
    </StyledCategoryList>
  );
}

export default CategoryList;
