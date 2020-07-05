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
        amount: -300,
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
        amount: -200,
        type: 'expense',
      },
    ],
  },
  {
    date: dayjs().month(5).day(12),
    recordList: [
      {
        id: 3,
        category: 'Diner',
        categoryId: 2,
        categoryIcon: 'icon-daochacanyin',
        amount: -3200,
        type: 'expense',
      },
      {
        id: 4,
        category: 'Salery',
        categoryId: 22,
        categoryIcon: 'icon-gongzi',
        amount: 430,
        type: 'income',
      },
      {
        id: 5,
        category: 'Sports',
        categoryId: 13,
        categoryIcon: 'icon-yundong',
        amount: -200,
        type: 'expense',
      },
      {
        id: 10,
        category: 'Office',
        categoryId: 11,
        categoryIcon: 'icon-bangong',
        amount: -200,
        type: 'expense',
      },
    ],
  },
  {
    date: dayjs().month(6).day(11),
    recordList: [
      {
        id: 6,
        category: 'Diner',
        categoryId: 2,
        categoryIcon: 'icon-daochacanyin',
        amount: -3000,
        type: 'expense',
      },
      {
        id: 7,
        category: 'Salery',
        categoryId: 22,
        categoryIcon: 'icon-gongzi',
        amount: 420,
        type: 'income',
      },
    ],
  },
  {
    date: dayjs().month(4).day(12),
    recordList: [
      {
        id: 8,
        category: 'Diner',
        categoryId: 2,
        categoryIcon: 'icon-daochacanyin',
        amount: -300,
        type: 'expense',
      },
      {
        id: 9,
        category: 'Salery',
        categoryId: 22,
        categoryIcon: 'icon-gongzi',
        amount: 400,
        type: 'income',
      },
      {
        id: 10,
        category: 'Sports',
        categoryId: 13,
        categoryIcon: 'icon-yundong',
        amount: -200,
        type: 'expense',
      },
    ],
  },
];
