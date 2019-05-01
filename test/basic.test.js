import Character from '../src/js/app';

test('Создание персонажа с заданными свойствами', () => {
  const character = new Character('John', 'Swordsman');
  const expected = {
    name: 'John',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(character).toEqual(expected);
});

test('Сoздание персонажа неверного типа дает ошибку', () => {
  expect(() => {
  new Character('Dragon', 'Dragon');
  }).toThrow();
  });

test('Создание персонажа с коротким именем дает ошибку', () => {
    expect(() => {
    new Character('Z', 'Daemon');
    }).toThrow();
    });

test('Создание персонажа с длинным именем дает ошибку', () => {
      expect(() => {
      new Character('Qwertyuiopasdf', 'Daemon');
      }).toThrow();
  });
