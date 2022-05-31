import {Payment} from "./Payment";

export class MpPayment implements Payment {
    doPayment(): void {
        console.log('Pago mediante Mercado Pago.')
    }
}
