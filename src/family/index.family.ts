import { Child } from "./class/Child";
import { Family } from "./class/Family";
import { Partner } from "./class/Partner";


const albert : Partner = new Partner('Albert', 58, 1234568, 'father', 'Programer', null);
const lissette : Partner = new Partner('Lissette', 55, 9874115, 'mother', 'Mother', albert);
const childs : Child[] = [
    new Child('Juan', 22, 54534354, 'child', null, ['play with friend', 'video game']),
    new Child('Norbe', 27, 54578354, 'child', ['lenguage', 'sports'], ['play with friend', 'video game']),
    new Child('Mariana', 32, 54214354, 'child', ['chesmistry'], ['play with friend', 'video game']),
];


const family1 = new Family(albert, lissette, childs);

family1.familyname;

family1.familyMembers;

// acciones del padre
family1.father
.run(23)
.stopMovement(true)
.bathe('hight')
.eat('meat and rice');
family1.father.sexIntercourse().sleep('night');

// acciones de la madre
family1.mother
.care(family1.chils[0]);
family1.mother
.bathe('low')
.sleep('afternoon')
.walk(12);
family1.mother.stopMovement(true)
.bathe('hight');
family1.mother.sexIntercourse()
.sleep('afternoon');
family1.mother.amuse('read')
.eat('banana');

// acciones hijo
family1.chils[2].addStudiesMatter('physical');
family1.chils[2].study(family1.chils[2].getStudiesMatter[1])
.cry('a lot of study')
.eat('banana')
.defecate('mid')
.bathe('low')
.sleep('afternoon');

family1.chils[1].addStartGames('sport');
family1.chils[1].play(family1.chils[1].getStartGames[0])
.walk(200)
.bathe('hight')
.sleep('night');
