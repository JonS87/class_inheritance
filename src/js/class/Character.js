export class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректная длина имени');
    }
    if (types.indexOf(type) >= 0) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
