import {ApproveLoanChain} from "./ApproveLoanChain";

export class Gold implements ApproveLoanChain {
    private next: ApproveLoanChain;
    creditCardRequest(totalLoan: number): void {
        if(totalLoan <= 10000) {
            console.log('Esta solicitud de tarjeta de credito la maneja la tarjeta Gold');
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
