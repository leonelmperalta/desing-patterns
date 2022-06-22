import {AccountComponent} from "./AccountComponent";

export class AccountComposite implements AccountComponent {
    private childAccounts: AccountComponent[];

    public constructor() {
        this.childAccounts = [];
    }

    showAccountName(): void {
        this.childAccounts.forEach((account :AccountComponent) => {
            account.showAccountName();
        })
    }

    getAmount(): number {
        let totalAmount = 0;
        this.childAccounts.forEach((account: AccountComponent) => {
            totalAmount += account.getAmount();
        })
        return totalAmount;
    }

    public addAccount(account: AccountComponent): void {
        this.childAccounts.push(account);
    }

    public removeAccount(account: AccountComponent): void {
        let index = this.childAccounts.indexOf(account);
        if(index != -1) {
            this.childAccounts.splice(index, 1);
        } else {
            console.log('Cuenta inexistente');
        }
    }



}
