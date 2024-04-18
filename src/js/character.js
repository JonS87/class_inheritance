
export class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректная длина имени');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else {
      throw new Error('Некорректный тип');
    }
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

export class Bowerman extends Character {
  
}

export class Swordsman extends Character {
  
}

export class Magician extends Character {
  
}

export class Daemon extends Character {
  
}

export class Undead extends Character {
  
}

export class Zombie extends Character {
  
}