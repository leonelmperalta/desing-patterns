import {AccountComponent} from "./AccountComponent";

export class CurrentAccount implements AccountComponent {
    private amount: number;
    private name: String;

    public constructor(amount: number, name: String) {
        this.amount = amount;
        this.name = name;
    }

    showAccountName(): void {
        console.log(`Cuenta corriente: ${this.name}`)
    }

    getAmount(): number {
        return this.amount;
    }
}
