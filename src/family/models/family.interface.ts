import { Child } from "../class/Child";
import { Partner } from "../class/Partner";

export interface Family {
    father:Partner;
    mother:Partner;
    chils:Array<Child>
}