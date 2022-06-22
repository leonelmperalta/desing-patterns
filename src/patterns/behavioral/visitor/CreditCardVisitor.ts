import {FlightOffer} from "./FlightOffer";
import {GasolineOffer} from "./GasolineOffer";

export interface CreditCardVisitor {
    gasolineOffer(gasolineOffer: GasolineOffer): void;
    flightOffer(flightOffer: FlightOffer): void;
}
