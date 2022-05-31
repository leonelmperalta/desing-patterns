import {PaymentFactory} from "./patterns/creational/factory/PaymentFactory";
import {Payment} from "./patterns/creational/factory/Payment";
import {TypePayment} from "./patterns/creational/factory/TypePayment";

function factoryMethod() : void {
    let payment : Payment = PaymentFactory.buildPayment(TypePayment.CARD);
    payment.doPayment();
}

factoryMethod();
