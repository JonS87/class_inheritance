import {heroes, healthSort, healthValue} from '../app';

test.each([
  [{health: 55}, 'healthy'],
  [{health: 20}, 'wounded'],
  [{health: 5}, 'critical'],
])(
('should determine the level of health for healthy %s'),
(health, expected) => {
  const result = healthValue(health);
  expect(result).toBe(expected);
});

test('should sort', () => {
  const result = healthSort(heroes);

  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});