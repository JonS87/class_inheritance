import { Bowerman } from '../class/Bowerman';

test.each([
  [{name: 'м', type: 'Bowerman'}, Error],
  [{name: 'лучникккккк', type: 'Bowerman'}, Error],
])(
('should check name %s on the length for type Bowerman'),
(person, expected) => {
  function newPerson() {
    new Bowerman(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name in type Bowerman', () => {
  const result = new Bowerman('Лучник', 'Bowerman');

  expect(result.name).toBe('Лучник');
});

test('Should check attack by type Bowerman', () => {
  const result = new Bowerman('лучник', 'Bowerman');

  expect(result.attack).toBe(25);
});

test('Should check defence by type Bowerman', () => {
  const result = new Bowerman('лучник', 'Bowerman');

  expect(result.defence).toBe(25);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Bowerman('Лучник', 'SomePerson');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Bowerman('Лучник', 'Bowerman');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Bowerman('Лучник', 'Bowerman');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Bowerman('Лучник', 'Bowerman');
  result.damage(50);

  expect(result.health).toBeCloseTo(62.5);
});

test('should check damage when health < 0', () => {
  const result = new Bowerman('Лучник', 'Bowerman');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});
