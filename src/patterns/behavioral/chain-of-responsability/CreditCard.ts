import {ApproveLoanChain} from "./ApproveLoanChain";
import {Gold} from "./Gold";
import {Platinum} from "./Platinum";
import {Black} from "./Black";

export class CreditCard implements ApproveLoanChain {
    private next: ApproveLoanChain;

    getNext(): ApproveLoanChain {
        return this.next;
    }

    setNext(loan: ApproveLoanChain): void {
        this.next = loan;
    }

    creditCardRequest(totalLoan: number): void {
        let gold: Gold = new Gold();
        this.setNext(gold);

        let platinum = new Platinum();
        gold.setNext(platinum);

        let black = new Black();
        platinum.setNext(black);

        this.next.creditCardRequest(totalLoan);
    }

}
