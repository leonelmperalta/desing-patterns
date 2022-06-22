import {ICreditCard} from "./ICreditCard";

export class UnsecureCreditCard implements ICreditCard {
    makePayment(): void {
        console.log('Pago realizado sin seguridad');
    }
}
