import dayjs from 'dayjs';

export const DEFAULT_RECORDS = [
  {
    id: '1',
    date: dayjs('2020-04-04').toString(),
    category: 'Diner',
    categoryIcon: 'icon-canyin',
    amount: 300,
    type: 'expense',
  },
  {
    id: '2',
    date: dayjs('2020-03-04').toString(),
    category: 'Salery',
    categoryIcon: 'icon-gongzi',
    amount: 400,
    type: 'income',
  },
  {
    id: '3',
    date: dayjs('2020-03-03').toString(),
    category: 'Sports',
    categoryIcon: 'icon-yundong',
    amount: 200,
    type: 'expense',
  },
];
