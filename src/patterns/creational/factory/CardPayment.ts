import {Payment} from "./Payment";

export class CardPayment implements Payment {
    doPayment(): void {
        console.log('Pago mediante tarjeta.')
    }

}
