import {PaymentMethod} from "./PaymentMethod";

export class Credit implements PaymentMethod {
    doPayment(): String {
        return 'Pago con credito.';
    }
}
