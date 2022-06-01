import {AbstractFactory} from "./AbstractFactory";
import {CardFactory} from "./CardFactory";
import {PaymentMethodFactory} from "./PaymentMethodFactory";

export class FactoryProvider {
    public static getFactory(chooseFactory: String) : AbstractFactory<any> {
        if (chooseFactory === 'CARD') {
            return new CardFactory();
        } else if (chooseFactory === 'PAYMENT_METHOD') {
            return new PaymentMethodFactory();
        }
        return null;
    }
}
