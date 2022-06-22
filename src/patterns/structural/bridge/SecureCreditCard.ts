import {ICreditCard} from "./ICreditCard";

export class SecureCreditCard implements ICreditCard {
    makePayment(): void {
        console.log('Pago realizado con seguridad');
    }
}
