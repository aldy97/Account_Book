import dayjs from 'dayjs';

export const DEFAULT_RECORDS = [
  {
    date: dayjs().month(5).day(10),
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
    date: dayjs().month(6).day(27),
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
    date: dayjs().month(4).day(12),
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
