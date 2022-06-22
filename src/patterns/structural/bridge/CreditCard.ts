import {ICreditCard} from "./ICreditCard";

export abstract class CreditCard {
    protected creditCard: ICreditCard;

    protected constructor(creditCard: ICreditCard) {
        this.creditCard = creditCard;
    }

    public abstract makePayment(): void;
}
