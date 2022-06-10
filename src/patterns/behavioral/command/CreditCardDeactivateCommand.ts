import {Command} from "./Command";
import {CreditCard} from "./CreditCard";

export class CreditCardDeactivateCommand implements Command {
    creditCard: CreditCard;

    public constructor(creditCard: CreditCard) {
        this.creditCard = creditCard;
    }
    execute(): void {
        this.creditCard.deactivate();
        this.creditCard.sendSMSToCustomerDeactivate();
    }

}
