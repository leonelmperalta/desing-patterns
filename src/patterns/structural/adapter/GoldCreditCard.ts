import {Secure} from "./Secure";

export class GoldCreditCard implements Secure {
    payWithSecureLevelA(): void {
        // no implementar
    }

    payWithSecureLevelZ(): void {
        console.log('Tarjeta gold: Pago con seguridad baja nivel Z');
    }

}
