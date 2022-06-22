import {Credit} from "./Credit";
import {Gold} from "./Gold";
import {Silver} from "./Silver";
import {Black} from "./Black";

export class CreditMarket {
    private gold: Credit;
    private silver: Credit;
    private black: Credit;

    public constructor() {
        this.gold = new Gold();
        this.silver = new Silver();
        this.black = new Black();
    }

    public showCreditGold(): void {
        this.gold.showCredit();
    }
    public showCreditSilver(): void {
        this.silver.showCredit();
    }
    public showCreditBlack(): void {
        this.black.showCredit();
    }
}
