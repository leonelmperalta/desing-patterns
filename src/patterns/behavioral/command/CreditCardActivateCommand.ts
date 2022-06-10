import {Command} from "./Command";
import {CreditCard} from "./CreditCard";

export class CreditCardActivateCommand implements Command {

    creditCard: CreditCard;
    public constructor(creditCard: CreditCard) {
        this.creditCard = creditCard;
    }

    execute(): void {
        this.creditCard.activate();
        this.creditCard.sendSMSToCustomerActivate();
    }

}
