import {AccountComponent} from "./AccountComponent";

export class SavingAccount implements AccountComponent {
    private amount: number;
    private name: String;

    public constructor(amount: number, name: String) {
        this.amount = amount;
        this.name = name;
    }

    showAccountName(): void {
        console.log(`Cuenta ahorro: ${this.name}`)
    }

    getAmount(): number {
        return this.amount;
    }

}
