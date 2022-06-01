import {PaymentMethod} from "./PaymentMethod";

export class Debit implements PaymentMethod {
    doPayment(): String {
        return 'Pago con debito.';
    }
}
