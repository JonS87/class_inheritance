import { Swordsman } from '../class/Swordsman';

test.each([
  [{name: 'м', type: 'Swordsman'}, Error],
  [{name: 'лучникккккк', type: 'Swordsman'}, Error],
])(
('should check name %s on the length for type Swordsman'),
(person, expected) => {
  function newPerson() {
    new Swordsman(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name in type Swordsman', () => {
  const result = new Swordsman('Лучник', 'Swordsman');

  expect(result.name).toBe('Лучник');
});

test('Should check attack by type Swordsman', () => {
  const result = new Swordsman('лучник', 'Swordsman');

  expect(result.attack).toBe(40);
});

test('Should check defence by type Swordsman', () => {
  const result = new Swordsman('лучник', 'Swordsman');

  expect(result.defence).toBe(10);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Swordsman('Лучник', 'SomePerson');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Swordsman('Лучник', 'Swordsman');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Swordsman('Лучник', 'Swordsman');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Swordsman('Лучник', 'Swordsman');
  result.damage(50);

  expect(result.health).toBeCloseTo(55);
});

test('should check damage when health < 0', () => {
  const result = new Swordsman('Лучник', 'Swordsman');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});
