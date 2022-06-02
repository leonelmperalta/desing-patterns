import {PaymentFactory} from "./patterns/creational/factory/PaymentFactory";
import {Payment} from "./patterns/creational/factory/Payment";
import {TypePayment} from "./patterns/creational/factory/TypePayment";
import { AbstractFactory } from "./patterns/creational/abstract-factory/AbstractFactory";
import {FactoryProvider} from "./patterns/creational/abstract-factory/FactoryProvider";
import {Card} from "./patterns/creational/abstract-factory/Card";
import {PaymentMethod} from "./patterns/creational/abstract-factory/PaymentMethod";
import {Card as CardB, CardBuilder} from "./patterns/creational/builder/Card";

function factoryMethod() : void {
    let payment : Payment = PaymentFactory.buildPayment(TypePayment.CARD);
    payment.doPayment();
}

function abstractFactoryMethod() : void {
    let factory : AbstractFactory<any> = FactoryProvider.getFactory("CARD");
    let tarjeta : Card = <Card> factory.create("VISA");
    let factory1 : AbstractFactory<any> = FactoryProvider.getFactory("PAYMENT_METHOD");
    let paymentMethod : PaymentMethod = <PaymentMethod> factory1.create("DEBIT");
    console.log(`Card type: ${tarjeta.getCardType()}\nCard Number: ${tarjeta.getCardNumber()}`);
    console.log(`Payment method: ${paymentMethod.doPayment()}`)
}

function builderPattern() : void {
    let card : CardB = new CardBuilder("VISA", "1111 2222 3333 4444")
        .setName("John Doe")
        .setExpires(2033)
        .setCredit(false)
        .build();
    console.log(card);

    let card1 : CardB = new CardBuilder("MASTERCARD", "1111 3333 2222 4444").build();
    console.log(card1)
}

//factoryMethod();
//abstractFactoryMethod();
builderPattern();
