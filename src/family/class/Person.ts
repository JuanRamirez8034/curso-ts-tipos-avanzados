import { AmuseType, FamilyRoll, Intensity, Moment, MovementStatus, Person as Person_, SexType } from '../models/person.interface';

export abstract class Person implements Person_ {

    protected name                 : string = '';
    protected age                  : number = 0;
    protected id                   : number = 0;
    protected roll                 : FamilyRoll = 'child';
    protected movementStatus       : MovementStatus = 'stopped';
    protected static membersNumber : number = 0;
    protected sexType              : SexType = 'female';

    constructor(name:string, age:number, id:number, roll:FamilyRoll){
        this.name = name;
        this.age  = age ;
        this.id   = id  ;
        this.roll = roll;
        Person.membersNumber += 1;
    }

    // obtener los numeros de las personas creadas
    public get getMembers():number {
        return Person.membersNumber;
    }
    
    // obtener el tipo de sexo
    public get getSexType():SexType {
        return this.sexType;
    }
    
    // obtener el tipo de sexo
    public get getName():string {
        return this.name;
    }
    
    // obtener el tipo de sexo
    public get getAge():number {
        return this.age;
    }

    // comer
    public eat(food: string): Person {
        this.print(`${this.name} is eating...`);
        return this;
    }

    // defecar
    public defecate(intensity: Intensity): Person {
        this.print(`${this.name} is defecating with level ${intensity}...`);
        return this;
    }

    // caminar
    public walk(distance: number): Person {
        this.print(`${this.name} is walking "${distance}Mts" of distance...`);
        this.movementStatus = 'walk';
        return this;
    }

    // correr
    public run(distance: number): Person {
        this.print(`${this.name} is running "${distance}Mts" of distance, uff!...`);
        this.movementStatus = 'run';
        return this;
    }

    // detener cualquier tipo de movimeito
    public stopMovement(status: boolean): Person {
        const result : boolean = status && this.movementStatus !== 'stopped';
        this.print(`${this.name} movement status "${this.movementStatus}". Stopped? = ${result}`);
        this.movementStatus = 'stopped';
        return this;
    }

    // dormir
    public sleep(moment: Moment): Person {
        this.print(`${this.name} is sleep...`);
        return this;
    }

    // entretenerse
    public amuse(amuseType: AmuseType): Person {
        this.print(`${this.name} is ${amuseType}...`);
        return this;
    }

    // bañarse
    public bathe(dirtLevel: Intensity): Person {
        this.print(`${this.name} is taking a bath with level ${dirtLevel}...`);
        return this;
    }

    // imprimir mensajes success
    protected print(text:string):void {
        console.log('[+] ' + text);
        console.log('--------------------------------------------------------');
    }
}