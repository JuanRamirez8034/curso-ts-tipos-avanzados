import { Child as Child_, GameType, MatterType} from '../models/child.interface';
import { FamilyRoll } from '../models/person.interface';
import { Person } from './Person';

export class Child extends Person implements Child_ {

    protected studiesMatterList : MatterType[] | null = null;
    protected startGamesList    : GameType[] | null = null;

    constructor(name:string, age:number, id:number, roll:FamilyRoll, studiesMatterList : MatterType[] | null, startGamesList    : GameType[] | null){
        super(name, age, id, roll);
        this.studiesMatterList = studiesMatterList;
        this.startGamesList = startGamesList;
    }

    // jugar
    public play(game: GameType): Child {
        this.print(`The child ${this.name} is playing ${game}...`);
        return this;
    }

    // estudiar
    public study(matter: MatterType): Child {
        this.print(`The child ${this.name} is studing ${matter}...`);
        return this;
    }

    // llorar
    public cry(reason: string): Child {
        this.print(`The child ${this.name} is crying for ${reason}...`);
        return this;
    }

    // obtener los juegos favoritos
    public get getStartGames():GameType[]{
        return this.startGamesList !== null ? [...this.startGamesList] : [];
    }

    // obtener los juegos favoritos
    public get getStudiesMatter():MatterType[]{
        return this.studiesMatterList !== null ? [...this.studiesMatterList] : [];
    }

    // agregar juegos
    public addStartGames(game:GameType){
        this.print('Game added...');
        if(this.startGamesList === null) this.startGamesList = [];
        this.startGamesList.push(game);
    }

    // remover juegos
    public set removedStartGames(game:GameType){
        this.print(`The game ${game} removed success...`);
        this.startGamesList = this.startGamesList?.filter(e => e !== game) ?? this.startGamesList;
    }

    // agregar estudios
    public addStudiesMatter(matter:MatterType):void{
        this.print('Matter added...');
        if(this.studiesMatterList === null) this.studiesMatterList = [];
        this.studiesMatterList.push(matter);
    }

    // remover estudios
    public set removedStudiesMatter(matter:MatterType){
        this.print(`The Matter ${matter} removed success...`);
        this.studiesMatterList = this.studiesMatterList?.filter(e => e !== matter) ?? this.studiesMatterList;
    }


}