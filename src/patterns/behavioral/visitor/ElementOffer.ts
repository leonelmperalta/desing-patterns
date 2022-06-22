import {CreditCardVisitor} from "./CreditCardVisitor";

export interface ElementOffer {
    accept(visitor: CreditCardVisitor): void;
}
