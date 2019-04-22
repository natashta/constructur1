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
  try {
    const character = new Character('Dragon', 'Dragon');
    expect(character).toBeUndefined();
  } catch (e) {
    expect(e).toEqual(Error('Указан неверный тип персонажа'));
  }
});

test('Создание персонажа с коротким именем дает ошибку', () => {
  try {
    const character = new Character('Z', 'Daemon');
    expect(character).toBeUndefined();
  } catch (e) {
    expect(e).toEqual(Error('Некорректно введено имя'));
  }
});

test('Создание персонажа с длинным именем дает ошибку', () => {
  try {
    const character = new Character('Qwertyuiopasdf', 'Daemon');
    expect(character).toBeUndefined();
  } catch (e) {
    expect(e).toEqual(Error('Некорректно введено имя'));
  }
});
