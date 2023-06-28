import { data, types } from './data'; // js
import SomeError from './errors'; // js

import {
//  compare, sortObjectByKeysList,
  orderByProps,
} from './sortFunctions';
import { specialItem, ch3 } from './special';


export default class Character {
  constructor(name, type) {
    this.level = 1;
    this.health = 100;
    if (
      typeof name === 'string'
      && name.length > 1
      && name.length < 11
    ) {
      this.name = name;
    } else {
      throw new SomeError(
        'not-a-string',
        'Name not a string or its length is out of the range 2-10',
      );
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new SomeError(
        'invalid-type',
        'Character`s type not valid',
      );
    }

    this.attack = data[this.type].attack;
    this.defence = data[this.type].defence;
  }
}

console.log('******');
const ch1 = new Character('Python', 'Daemon');
console.log(ch1);
console.log('******');

// ch = new Character();
// orderByProps(ch, []);

const ch = new Character('Alex', 'Bowman');
orderByProps(ch, ['defence', 'level']);

console.log('specialItem(ch3, 1)', specialItem(ch3, 1));
