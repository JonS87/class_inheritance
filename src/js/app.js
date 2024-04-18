// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export let heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

export function healthValue(hero) {
  if (hero.health >= 50) {
    return 'healthy';
  }
  if (hero.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function healthSort(hero) {
  return hero.sort((a, b) => b.health - a.health);
}