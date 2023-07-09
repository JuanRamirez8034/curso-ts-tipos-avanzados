import { Person } from "./person.interface";

export interface Child extends Person {
    play(game:GameType):Child;
    study(matter:MatterType):Child;
    cry(reason:string):Child;
}

export type GameType = 'sport' | 'video game' | 'board game' | 'play with friend';
export type MatterType = 'physical' | 'math' | 'lenguage' | 'culture' | 'chesmistry' | 'sports';