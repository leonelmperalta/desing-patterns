import {PaymentFactory} from "./patterns/creational/factory/PaymentFactory";
import {Payment} from "./patterns/creational/factory/Payment";
import {TypePayment} from "./patterns/creational/factory/TypePayment";
import { AbstractFactory } from "./patterns/creational/abstract-factory/AbstractFactory";
import {FactoryProvider} from "./patterns/creational/abstract-factory/FactoryProvider";
import {Card} from "./patterns/creational/abstract-factory/Card";
import {PaymentMethod} from "./patterns/creational/abstract-factory/PaymentMethod";
import {Card as CardB, CardBuilder} from "./patterns/creational/builder/Card";
import {PrototypeFactory} from "./patterns/creational/prototype/PrototypeFactory";
import {PrototypeCard} from "./patterns/creational/prototype/PrototypeCard";
import {Card as CardS} from "./patterns/creational/singleton/Card";
import {CreditCard} from "./patterns/behavioral/chain-of-responsability/CreditCard";

// CREATION
// <===================================================================================================================>
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

function prototypePattern() : void {
    PrototypeFactory.loadCard();
    let visa : PrototypeCard = PrototypeFactory.getInstance(PrototypeFactory.CardType.VISA);
    visa.getCard();

    let amex : PrototypeCard = PrototypeFactory.getInstance(PrototypeFactory.CardType.AMEX);
    amex.getCard();
}

function singleton(): void {
    let card = CardS.getInstance();
    card.cardNumber = '2314 1234 5423 3211';
    console.log(card.cardNumber);
}
// COMPORTMENT
// <===================================================================================================================>
function chainOfResponsability(): void {
    let creditCard: CreditCard = new CreditCard();
    creditCard.creditCardRequest(60000);
}

//factoryMethod();
//abstractFactoryMethod();
//builderPattern();
//prototypePattern();
//singleton();

chainOfResponsability();
