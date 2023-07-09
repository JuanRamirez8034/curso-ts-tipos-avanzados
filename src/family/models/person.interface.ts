export interface Person {
    eat(food:string)              :Person;
    defecate(intensity:Intensity) :Person;
    walk(distance:number)         :Person;
    run(distance:number)          :Person;
    stopMovement(status:boolean)  :Person;
    sleep(moment:Moment)          :Person;
    amuse(amuseType:AmuseType)    :Person;
    bathe(dirtLevel:Intensity)    :Person;
}

export type Intensity      = 'low' | 'mid' | 'hight';
export type Moment         = 'morning' | 'afternoon' | 'night';
export type AmuseType      = 'read' | 'wacth movie' | 'use social network' | 'sleep' | 'park walk' | 'play any sport' | 'play video game';
export type FamilyRoll     = 'father' | 'mother' | 'child';
export type MovementStatus = 'run' | 'walk' | 'stopped';
export type SexType        = 'man' | 'female' | 'gay';