import {CreditCard} from "./CreditCard";
import {ICreditCard} from "./ICreditCard";

export class ClassicCreditCard extends CreditCard {
    public constructor(creditCard: ICreditCard) {
        super(creditCard);
    }
    makePayment(): void {
        this.creditCard.makePayment();
    }
}
