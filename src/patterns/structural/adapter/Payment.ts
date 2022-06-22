import {CreditCardType} from "./CreditCardType";

export interface Payment {
    pay(type: CreditCardType): void;
}
