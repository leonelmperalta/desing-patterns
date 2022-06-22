import {CreditCardVisitor} from "./CreditCardVisitor";
import {FlightOffer} from "./FlightOffer";
import {GasolineOffer} from "./GasolineOffer";

export class ClassicCreditCardVisitor implements CreditCardVisitor {
    gasolineOffer(gasolineOffer: GasolineOffer): void {
        console.log('Descuento del 3% en combustible con tarjeta CLASSIC');
    }

    flightOffer(flightOffer: FlightOffer): void {
        console.log('Descuento del 5% en vuelos con tarjeta CLASSIC');
    }
}
