import { Character} from '../character';

test.each([
  [{name: 'м', type: 'Bowman'}, Error],
  [{name: 'лучникккккк', type: 'Swordsman'}, Error],
])(
('should check name %s on the length'),
(person, expected) => {
  function newPerson() {
    new Character(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name', () => {
  const result = new Character('Лучник', 'Swordsman');

  expect(result.name).toBe('Лучник');
});

test.each([
  [{name: 'маг', type: 'Bowman'}, 25],
  [{name: 'лучник', type: 'Swordsman'}, 40],
  [{name: 'мечник', type: 'Magician'}, 10],
  [{name: 'маг', type: 'Undead'}, 25],
  [{name: 'лучник', type: 'Zombie'}, 40],
  [{name: 'мечник', type: 'Daemon'}, 10],
])(
('Person %s should check attack by %t type'),
(person, expected) => {
  const result = new Character(person.name, person.type);

  expect(result.attack).toBe(expected);
});

test.each([
  [{name: 'маг', type: 'Bowman'}, 25],
  [{name: 'лучник', type: 'Swordsman'}, 10],
  [{name: 'мечник', type: 'Magician'}, 40],
  [{name: 'маг', type: 'Undead'}, 25],
  [{name: 'лучник', type: 'Zombie'}, 10],
  [{name: 'мечник', type: 'Daemon'}, 40],
])(
('Person %s should check defence by %t type'),
(person, expected) => {
  const result = new Character(person.name, person.type);

  expect(result.defence).toBe(expected);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Character('Лучник', 'Swordsmans');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Character('Лучник', 'Bowman');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Character('Лучник', 'Bowman');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Character('Лучник', 'Bowman');
  result.damage(50);

  expect(result.health).toBe(62.5);
});

test('should check damage when health < 0', () => {
  const result = new Character('Лучник', 'Bowman');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});
