export interface ApproveLoanChain {
    setNext(loan: ApproveLoanChain): void;
    getNext(): ApproveLoanChain;
    creditCardRequest(totalLoan: number): void;
}
