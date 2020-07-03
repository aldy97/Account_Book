import dayjs from 'dayjs';

export const DEFAULT_RECORDS = [
  {
    date: dayjs('2020-04-04'),
    recordList: [
      {
        id: 0,
        category: 'Diner',
        categoryId: 2,
        categoryIcon: 'icon-daochacanyin',
        amount: 300,
        type: 'expense',
      },
      {
        id: 1,
        category: 'Salery',
        categoryId: 22,
        categoryIcon: 'icon-gongzi',
        amount: 400,
        type: 'income',
      },
      {
        id: 2,
        category: 'Sports',
        categoryId: 13,
        categoryIcon: 'icon-yundong',
        amount: 200,
        type: 'expense',
      },
    ],
  },
  {
    date: dayjs('2020-06-27'),
    recordList: [
      {
        id: 3,
        category: 'Diner',
        categoryId: 2,
        categoryIcon: 'icon-daochacanyin',
        amount: 300,
        type: 'expense',
      },
      {
        id: 4,
        category: 'Salery',
        categoryId: 22,
        categoryIcon: 'icon-gongzi',
        amount: 400,
        type: 'income',
      },
    ],
  },
  {
    date: dayjs('2020-03-04').toString(),
    recordList: [
      {
        id: 0,
        category: 'Diner',
        categoryId: 2,
        categoryIcon: 'icon-daochacanyin',
        amount: 300,
        type: 'expense',
      },
      {
        id: 1,
        category: 'Salery',
        categoryId: 22,
        categoryIcon: 'icon-gongzi',
        amount: 400,
        type: 'income',
      },
      {
        id: 2,
        category: 'Sports',
        categoryId: 13,
        categoryIcon: 'icon-yundong',
        amount: 200,
        type: 'expense',
      },
    ],
  },
];
