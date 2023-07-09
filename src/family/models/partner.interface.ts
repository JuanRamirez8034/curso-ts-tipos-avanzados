import { Person } from '../class/Person';

export interface Partner {
    work(work:string):Partner;
    sexIntercourse():Partner;
    care(person:Person):Person;
}

export type PartnerType = 'heterosexual' | 'homosexual';