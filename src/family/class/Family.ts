import { Family as Family_} from '../models/family.interface';
import { Child } from './Child';
import { Partner } from './Partner';

export class Family implements Family_ {
    public father: Partner;
    public mother: Partner;
    public chils: Child[];
    private familyName : string = '';

    constructor(father:Partner, mother:Partner, childs:Child[]){
        this.father = father;
        this.mother = mother;
        this.chils = childs;
        this.familyName = `${father.getName} - ${mother.getName}`;
    }

    public get familyname():string {
        console.log(`>>> Family -> ` + this.familyName);
        return this.familyName;
    }

    public get familyMembers():Family{
        console.log(`This number family members is : ${this.father.getMembers}`);
        console.log('And their names are');
        console.log('> father: '+ this.father.getName);
        console.log('> mother: '+ this.mother.getName);
        let number : number = 1;
        this.chils.forEach(_child=>{
            console.log(`> ${number} - Child: ${_child.getName}`);
            number++;
        });
        console.log('____________________________________________________________');
        return this;
    }
}