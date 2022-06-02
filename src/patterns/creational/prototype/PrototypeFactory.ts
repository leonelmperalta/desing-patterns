import {PrototypeCard} from "./PrototypeCard";
import {Visa} from "./Visa";
import {Amex} from "./Amex";

export class PrototypeFactory {
    public static CardType = class {
        public static readonly VISA: String = "visa";
        public static readonly AMEX: String = "amex";
    }
    private static prototypes: Map<String, PrototypeCard> = new Map<String, PrototypeCard>();
    public static getInstance(type: String) : PrototypeCard {
        return this.prototypes.get(type).clone();
    }
    public static loadCard(): void {
        let visa: Visa = new Visa();
        visa.name = "Esta es una tarjeta Visa con numero 0000";
        this.prototypes.set(this.CardType.VISA, visa);

        let amex: Amex = new Amex();
        amex.name = "Esta es una tarjeta Amex con numero 0000";
        this.prototypes.set(this.CardType.AMEX, amex);
    }
}
