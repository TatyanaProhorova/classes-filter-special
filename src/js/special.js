export const ch3 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

// export function special({ special } = obj) { // [id, name, description, icon]
//   const weapons = [];
//   for (const item in special) {
//     const {
//       id, name, description = 'Описание недоступно', icon,
//     } = special[item];
//     weapons.push(
//       [id, name, description, icon],
//     );
//   }
//   return weapons;
// }

export function specialItem(obj, item) {
  const { special } = obj;
  const {
    id, name, description = 'Описание недоступно', icon,
  } = special[item];
  return [id, name, icon, description];
}
