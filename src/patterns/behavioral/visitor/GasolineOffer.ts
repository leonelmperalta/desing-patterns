import {ElementOffer} from "./ElementOffer";
import {CreditCardVisitor} from "./CreditCardVisitor";

export class GasolineOffer implements ElementOffer {
    accept(visitor: CreditCardVisitor): void {
        visitor.gasolineOffer(this);
    }
}
