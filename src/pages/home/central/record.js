import dayjs from 'dayjs';

export const DEFAULT_RECORDS = [
  {
    date: dayjs('2020-04-04').toString(),
    recordList: [
      {
        id: 0,
        category: 'Diner',
        categoryIcon: 'icon-daochacanyin',
        amount: 300,
        type: 'expense',
      },
      {
        id: 1,
        category: 'Salery',
        categoryIcon: 'icon-gongzi',
        amount: 400,
        type: 'income',
      },
      {
        id: 2,
        category: 'Sports',
        categoryIcon: 'icon-yundong',
        amount: 200,
        type: 'expense',
      },
    ],
  },
  {
    date: dayjs('2020-06-27').toString(),
    recordList: [
      {
        id: 3,
        category: 'Diner',
        categoryIcon: 'icon-daochacanyin',
        amount: 300,
        type: 'expense',
      },
      {
        id: 4,
        category: 'Salery',
        categoryIcon: 'icon-gongzi',
        amount: 400,
        type: 'income',
      },
    ],
  },
];
