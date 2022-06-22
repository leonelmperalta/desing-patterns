import {Payment} from "./Payment";
import {Secure} from "./Secure";
import {CreditCardType} from "./CreditCardType";
import {BlackCreditCard} from "./BlackCreditCard";
import {GoldCreditCard} from "./GoldCreditCard";

export class Adapter implements Payment {

    secureCreditCard: Secure;

    public constructor(type: CreditCardType) {
        if (type === CreditCardType.BLACK ) {
            this.secureCreditCard = new BlackCreditCard();
        } else if (type === CreditCardType.GOLD) {
            this.secureCreditCard = new GoldCreditCard();
        }
    }
    pay(type: CreditCardType): void {
        if (type === CreditCardType.BLACK) {
            this.secureCreditCard.payWithSecureLevelA();
        } else if (type === CreditCardType.GOLD) {
            this.secureCreditCard.payWithSecureLevelZ();
        }
    }

}
