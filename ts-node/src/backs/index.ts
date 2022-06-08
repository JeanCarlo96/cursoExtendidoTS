import { genericFuntionArrow } from '../generics/genericts';
import { Villain, Hero } from '../interfaces';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFuntionArrow<Hero>(deadpool).realName);
console.log(genericFuntionArrow<Villain>(deadpool).dangerLevel);