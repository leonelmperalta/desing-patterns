import {CreditCardVisitor} from "./CreditCardVisitor";
import {GasolineOffer} from "./GasolineOffer";
import {FlightOffer} from "./FlightOffer";

export class BlackCreditCardVisitor implements CreditCardVisitor {
    gasolineOffer(gasolineOffer: GasolineOffer): void {
        console.log('Descuento del 10% en combustible con tarjeta BLACK');
    }

    flightOffer(flightOffer: FlightOffer): void {
        console.log('Descuento del 8% en vuelos con tarjeta BLACK');
    }

}
