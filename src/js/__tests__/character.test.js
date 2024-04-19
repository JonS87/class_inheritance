import { Character} from '../class/Character';

test.each([
  [{name: 'м', type: 'Bowerman'}, Error],
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

test('should check incorrect type', () => {
  function newPerson() {
    new Character('Лучник', 'Swordsmans');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Character('Лучник', 'Bowerman');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Character('Лучник', 'Bowerman');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});
