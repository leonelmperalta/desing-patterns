import {AbstractFactory} from "./AbstractFactory";
import {PaymentMethod} from "./PaymentMethod";
import {Debit} from "./Debit";
import {Credit} from "./Credit";

export class PaymentMethodFactory implements AbstractFactory<PaymentMethod>{
    create(type: String): PaymentMethod {
        if(type === 'DEBIT') {
            return new Debit();
        } else if (type === 'CREDIT') {
            return new Credit();
        }
        return null;
    }

}
