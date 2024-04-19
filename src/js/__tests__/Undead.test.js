import { Undead } from '../class/Undead';

test.each([
  [{name: 'м', type: 'Undead'}, Error],
  [{name: 'лучникккккк', type: 'Undead'}, Error],
])(
('should check name %s on the length for type Undead'),
(person, expected) => {
  function newPerson() {
    new Undead(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name in type Undead', () => {
  const result = new Undead('Лучник', 'Undead');

  expect(result.name).toBe('Лучник');
});

test('Should check attack by type Undead', () => {
  const result = new Undead('лучник', 'Undead');

  expect(result.attack).toBe(25);
});

test('Should check defence by type Undead', () => {
  const result = new Undead('лучник', 'Undead');

  expect(result.defence).toBe(25);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Undead('Лучник', 'SomePerson');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Undead('Лучник', 'Undead');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Undead('Лучник', 'Undead');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Undead('Лучник', 'Undead');
  result.damage(50);

  expect(result.health).toBeCloseTo(62.5);
});

test('should check damage when health < 0', () => {
  const result = new Undead('Лучник', 'Undead');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});
