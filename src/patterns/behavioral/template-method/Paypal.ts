import {Payment} from "./Payment";

export class Paypal extends Payment {

    initializePayment(): void {
        console.log('Inicializando pago mediante paypal.')
    }

    startPayment(): void {
        console.log('Realizando pago...');
        console.log('...');
    }

    endPayment(): void {
        console.log('Pago finalizado.');
    }

}
