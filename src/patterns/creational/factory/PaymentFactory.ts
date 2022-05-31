import {TypePayment} from "./TypePayment";
import {CardPayment} from "./CardPayment";
import {MpPayment} from "./MpPayment";

export class PaymentFactory {
    public static buildPayment(type : TypePayment) {
        switch (type) {
            case TypePayment.CARD: {
                return new CardPayment();
            }
            case TypePayment.MERCADO_PAGO: {
                return new MpPayment();
            }
            default: {
                return new CardPayment();
            }
        }
    }
}
