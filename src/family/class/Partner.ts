import { Person } from "./Person";
import { PartnerType, Partner as Partner_ } from "../models/partner.interface"
import { FamilyRoll } from "../models/person.interface";

export class Partner extends Person implements Partner_ {

    protected employment : string = 'none';
    protected partnerType : PartnerType = 'heterosexual';
    protected partner : Partner | null = null;

    constructor(name: string, age: number, id: number, roll: FamilyRoll, employment:string, partner:Partner | null){
        super(name, age, id, roll);
        this.employment = employment;
        this.partner = partner;

        // al agregar una persona a otra se añaden en ambas entidades
        if (this.partner !== null) {
            if (partner !== null) {
              partner.partner = this;
            }
        }
    }

    // trabajar
    public work(work: string): Partner {
        this.print(`${this.name} is working in with ${work}...`);
        return this;
    }

    // relaciones sexuales
    public sexIntercourse(): Partner {

        if(this.partner === null){
            this.print(`${this.name} is alone, he only has to please himself :)...`);
            return this;
        }

        if(this.getSexType === this.partner.getSexType && this.getSexType !== 'gay' && this.partnerType === 'heterosexual' && this.partner.partnerType === 'heterosexual'){
            this.print(`${this.name} with sex type "${this.getSexType}" is having sex with ${this.partner.getName} with sex type ${this.partner.getSexType}. Is a sexual intercourse of type ${this.partnerType}`);
            return this;
        }

        this.print(`${this.name} with sex type "${this.getSexType}" is having sex with ${this.partner.getName} with sex type ${this.partner.getSexType}. Is a sexual intercourse of type gay`);
        return this;
    }

    // cuidar/proteger a alguien
    public care(person: Person): Person {
        this.print(`${this.name} is taking care of ${person.getName}`);
        return person;
    }

}