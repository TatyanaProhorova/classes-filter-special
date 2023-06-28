import { specialItem, ch3 } from '../special';


test('testing of defenite description', () => {
  const result = specialItem(ch3, 0);
  expect(result).toEqual([8, 'Двойной выстрел', 'http://...',
    'Двойной выстрел наносит двойной урон']);
});

test('testing of indefenite description', () => {
  const result = specialItem(ch3, 1);
  expect(result).toEqual([9, 'Нокаутирующий удар', 'http://...',
    'Описание недоступно']);
});


//   id: 9,
//   name: 'Нокаутирующий удар',
//   icon: 'http://...',
