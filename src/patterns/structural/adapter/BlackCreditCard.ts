import {Secure} from "./Secure";

export class BlackCreditCard implements Secure {
    payWithSecureLevelA(): void {
        console.log('Tarjeta BLACK: Pago con seguridad alta nivel A');
    }

    payWithSecureLevelZ(): void {
        // no implementar
    }

}
