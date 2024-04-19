import { Zombie } from '../class/Zombie';

test.each([
  [{name: 'м', type: 'Zombie'}, Error],
  [{name: 'лучникккккк', type: 'Zombie'}, Error],
])(
('should check name %s on the length for type Zombie'),
(person, expected) => {
  function newPerson() {
    new Zombie(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name in type Zombie', () => {
  const result = new Zombie('Лучник', 'Zombie');

  expect(result.name).toBe('Лучник');
});

test('Should check attack by type Zombie', () => {
  const result = new Zombie('лучник', 'Zombie');

  expect(result.attack).toBe(40);
});

test('Should check defence by type Zombie', () => {
  const result = new Zombie('лучник', 'Zombie');

  expect(result.defence).toBe(10);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Zombie('Лучник', 'SomePerson');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Zombie('Лучник', 'Zombie');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Zombie('Лучник', 'Zombie');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Zombie('Лучник', 'Zombie');
  result.damage(50);

  expect(result.health).toBeCloseTo(55);
});

test('should check damage when health < 0', () => {
  const result = new Zombie('Лучник', 'Zombie');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});
