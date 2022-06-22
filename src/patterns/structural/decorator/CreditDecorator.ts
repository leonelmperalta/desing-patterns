import {Credit} from "./Credit";

export class CreditDecorator implements Credit {
    protected decoratedCredit: Credit;
    public constructor(decoratedCredit: Credit) {
        this.decoratedCredit = decoratedCredit;
    }
    showCredit(): void {
        this.decoratedCredit.showCredit();
    }

}
