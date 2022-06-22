import {ElementOffer} from "./ElementOffer";
import {CreditCardVisitor} from "./CreditCardVisitor";

export class FlightOffer implements ElementOffer {
    accept(visitor: CreditCardVisitor): void {
        visitor.flightOffer(this);
    }
}
