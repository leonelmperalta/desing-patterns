import {Payment} from "./Payment";

export class MercadoPago extends Payment {
    initializePayment(): void {
        console.log('Inicializando pago mediante mercado pago.')
    }

    startPayment(): void {
        console.log('Realizando pago...');
        console.log('...');
        console.log('MP :D');
        console.log('...')
    }

    endPayment(): void {
        console.log('Pago finalizado.');
    }

}
