import {ApproveLoanChain} from "./ApproveLoanChain";

export class Black implements ApproveLoanChain {
    private next: ApproveLoanChain;
    creditCardRequest(totalLoan: number): void {
        if(totalLoan > 50000) {
            console.log('Esta solicitud de tarjeta de credito la maneja la tarjeta Black');
        } else {
            this.next.creditCardRequest(totalLoan);
        }
    }

    getNext(): ApproveLoanChain {
        return this.next;
    }

    setNext(loan: ApproveLoanChain): void {
        this.next = loan;
    }
}
