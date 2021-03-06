import {PaymentFactory} from "./patterns/creational/factory/PaymentFactory";
import {Payment} from "./patterns/creational/factory/Payment";
import {TypePayment} from "./patterns/creational/factory/TypePayment";
import {AbstractFactory} from "./patterns/creational/abstract-factory/AbstractFactory";
import {FactoryProvider} from "./patterns/creational/abstract-factory/FactoryProvider";
import {Card} from "./patterns/creational/abstract-factory/Card";
import {PaymentMethod} from "./patterns/creational/abstract-factory/PaymentMethod";
import {Card as CardB, CardBuilder} from "./patterns/creational/builder/Card";
import {PrototypeFactory} from "./patterns/creational/prototype/PrototypeFactory";
import {PrototypeCard} from "./patterns/creational/prototype/PrototypeCard";
import {Card as CardS} from "./patterns/creational/singleton/Card";
import {CreditCard} from "./patterns/behavioral/chain-of-responsability/CreditCard";
import {CreditCard as CreditCardC} from "./patterns/behavioral/command/CreditCard";
import {CreditCardInvoker} from "./patterns/behavioral/command/CreditCardInvoker";
import {CreditCardActivateCommand} from "./patterns/behavioral/command/CreditCardActivateCommand";
import {CreditCardDeactivateCommand} from "./patterns/behavioral/command/CreditCardDeactivateCommand";
import {ConcreteMediator} from "./patterns/behavioral/mediator/ConcreteMediator";
import {ConcreteCollege1} from "./patterns/behavioral/mediator/ConcreteCollege1";
import {ConcreteCollege2} from "./patterns/behavioral/mediator/ConcreteCollege2";
import {Caretaker} from "./patterns/behavioral/memento/Caretaker";
import {Article} from "./patterns/behavioral/memento/Article";
import {ArticleMemento} from "./patterns/behavioral/memento/ArticleMemento";
import {Car} from "./patterns/behavioral/observer/Car";
import {Pedestrian} from "./patterns/behavioral/observer/Pedestrian";
import {MessagePublisher} from "./patterns/behavioral/observer/MessagePublisher";
import {Semaphore} from "./patterns/behavioral/observer/Semaphore";
import {SemaphoreStatus} from "./patterns/behavioral/observer/SemaphoreStatus";
import {MobileAlertStateContext} from "./patterns/behavioral/state/MobileAlertStateContext";
import {VibrationState} from "./patterns/behavioral/state/VibrationState";
import {SilentState} from "./patterns/behavioral/state/SilentState";
import {Context} from "./patterns/behavioral/strategy/Context";
import {LowerStrategyTextFormatter} from "./patterns/behavioral/strategy/LowerStrategyTextFormatter";
import {CapitalStrategyTextFormatter} from "./patterns/behavioral/strategy/CapitalStrategyTextFormatter";
import {Payment as TPayment} from "./patterns/behavioral/template-method/Payment";
import {Paypal} from "./patterns/behavioral/template-method/Paypal";
import {MercadoPago} from "./patterns/behavioral/template-method/MercadoPago";
import {ElementOffer} from "./patterns/behavioral/visitor/ElementOffer";
import {GasolineOffer} from "./patterns/behavioral/visitor/GasolineOffer";
import {FlightOffer} from "./patterns/behavioral/visitor/FlightOffer";
import {BlackCreditCardVisitor} from "./patterns/behavioral/visitor/BlackCreditCardVisitor";
import {ClassicCreditCardVisitor} from "./patterns/behavioral/visitor/ClassicCreditCardVisitor";
import {CreditCard as ACreditCard} from "./patterns/structural/adapter/CreditCard";
import {CreditCardType} from "./patterns/structural/adapter/CreditCardType";
import {CreditCard as BCreditCard} from "./patterns/structural/bridge/CreditCard";
import {ClassicCreditCard} from "./patterns/structural/bridge/ClassicCreditCard";
import {UnsecureCreditCard} from "./patterns/structural/bridge/UnsecureCreditCard";
import {SecureCreditCard} from "./patterns/structural/bridge/SecureCreditCard";
import {AccountComponent} from "./patterns/structural/composite/AccountComponent";
import {CurrentAccount} from "./patterns/structural/composite/CurrentAccount";
import {SavingAccount} from "./patterns/structural/composite/SavingAccount";
import {AccountComposite} from "./patterns/structural/composite/AccountComposite";
import {Credit} from "./patterns/structural/decorator/Credit";
import {Gold} from "./patterns/structural/decorator/Gold";
import {Black} from "./patterns/structural/decorator/Black";
import {InternationalPaymentDecorator} from "./patterns/structural/decorator/InternationalPaymentDecorator";
import {SecureDecorator} from "./patterns/structural/decorator/SecureDecorator";
import {CreditMarket} from "./patterns/structural/facade/CreditMarket";
import {Enemy} from "./patterns/structural/flyweight/Enemy";
import {EnemyFactory} from "./patterns/structural/flyweight/EnemyFactory";
import {EnemyType} from "./patterns/structural/flyweight/EnemyType";
import {WeaponType} from "./patterns/structural/flyweight/WeaponType";
import {InternetProxy} from "./patterns/structural/proxy/InternetProxy";
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

function command(): void {
    let creditCard: CreditCardC = new CreditCardC();
    let creditCardDeactivate: CreditCardC = new CreditCardC();
    let invoker: CreditCardInvoker = new CreditCardInvoker();

    invoker.command = new CreditCardActivateCommand(creditCard);
    invoker.run();
    console.log('----------------------------------------------');
    invoker.command = new CreditCardDeactivateCommand(creditCardDeactivate);
    invoker.run();
}

function mediator(): void {
    let mediator: ConcreteMediator = new ConcreteMediator();
    let user1: ConcreteCollege1 = new ConcreteCollege1(mediator);
    let user2: ConcreteCollege2 = new ConcreteCollege2(mediator);

    mediator.user1 = user1;
    mediator.user2 = user2;
    console.log(`college1: ${mediator.user1}, college2: ${mediator.user2}`);
    user1.send("Hola soy user 1");
    user2.send("Hola user1, soy user 2");
}

function memento(): void {
    let caretaker: Caretaker = new Caretaker();
    let article: Article = new Article('Alberto', 'Memento es un patron interesante.');
    console.log(article.text);
    caretaker.addMemento(article.createMemento());
    article.text = article.text + 'Hay que conocerlo si o si.';
    console.log(article.text);
    caretaker.addMemento(article.createMemento());

    article.text = article.text + ' BORRAR ESTO';
    console.log(article.text);
    let articleMemento: ArticleMemento = caretaker.getMemento(0);
    let articleMemento1: ArticleMemento = caretaker.getMemento(1);

    article.restoreMemento(articleMemento1);
    console.log(article.text);
}

function observer(): void {
    const car: Car = new Car();
    const pedestrian: Pedestrian = new Pedestrian();
    const messagePublisher: MessagePublisher = new MessagePublisher();
    messagePublisher.attach(car);
    messagePublisher.attach(pedestrian);

    messagePublisher.notifyUpdate(new Semaphore(SemaphoreStatus.RED));
    setTimeout(() => {messagePublisher.notifyUpdate(new Semaphore(SemaphoreStatus.GREEN))}, 2000);
}

function state(): void {
    let mobileAlertStateContext: MobileAlertStateContext = new MobileAlertStateContext();
    mobileAlertStateContext.alert();
    mobileAlertStateContext.currentState = new VibrationState();
    mobileAlertStateContext.alert();
    mobileAlertStateContext.currentState = new SilentState();
    mobileAlertStateContext.alert();
}

function strategy(): void {
    let context = new Context(new CapitalStrategyTextFormatter());
    context.publishText('Este texto sera convertido a mayusculas.');
    context = new Context(new LowerStrategyTextFormatter());
    context.publishText('Este texto sera convertido a MINUSCULAS.');
}

function templateMethod(): void {
    const paypalPayment: TPayment = new Paypal();
    const mpPayment: TPayment = new MercadoPago();
    paypalPayment.makePayment();
    mpPayment.makePayment();
}

function visitor(): void {
    let gasolineOffer: ElementOffer = new GasolineOffer();
    let flightOffer: ElementOffer = new FlightOffer();

    gasolineOffer.accept(new BlackCreditCardVisitor());
    flightOffer.accept(new ClassicCreditCardVisitor());
}
// STRUCTURAL
// <===================================================================================================================>
function adapter(): void {
    const creditCard = new ACreditCard();
    creditCard.pay(CreditCardType.CLASSIC);
    creditCard.pay(CreditCardType.GOLD);
    creditCard.pay(CreditCardType.BLACK);
}
function bridge(): void {
    let classic : BCreditCard = new ClassicCreditCard(new UnsecureCreditCard());
    classic.makePayment();
    classic = new ClassicCreditCard(new SecureCreditCard());
    classic.makePayment();
}

function composite(): void {
    const currentAccount: AccountComponent = new CurrentAccount(50000, "John Doe");
    const savingsAccount: AccountComponent = new SavingAccount(150000, "Jane Doe");
    const accountComposite: AccountComposite = new AccountComposite();
    accountComposite.addAccount(currentAccount);
    accountComposite.addAccount(savingsAccount);
    accountComposite.showAccountName();
    console.log(`Saldo total: ${accountComposite.getAmount()}`);
}

function decorator(): void {
    const gold: Credit = new Gold();
    let blackInternationalPayment: Credit = new Black();
    blackInternationalPayment = new InternationalPaymentDecorator(blackInternationalPayment);
    let goldSecureAndInternational: Credit = new Gold();
    goldSecureAndInternational = new InternationalPaymentDecorator(goldSecureAndInternational);
    goldSecureAndInternational = new SecureDecorator(goldSecureAndInternational);

    console.log('----Tarjeta gold con configuracion----');
    gold.showCredit();
    console.log('----Tarjeta black con configuracion----');
    blackInternationalPayment.showCredit();
    console.log('----Tarjeta gold2 con configuracion----');
    goldSecureAndInternational.showCredit();
}

function facade(): void {
    const creditMarket: CreditMarket = new CreditMarket();
    creditMarket.showCreditBlack();
    creditMarket.showCreditGold();
    creditMarket.showCreditSilver();
}

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function flyweight(): void {
    const enemyTypes = [EnemyType.PRIVATE, EnemyType.LIEUTENANT];
    const weaponTypes = [WeaponType.RIFLE, WeaponType.HANDGUN, WeaponType.SHOTGUN, WeaponType.MACHINE_GUN, WeaponType.BAZOOKA];

    for (let i = 0; i < 15; i++) {
        let enemy: Enemy = EnemyFactory.getEnemy(getRandomInt(0, 2));
        enemy.setWeapon(weaponTypes[getRandomInt(0, weaponTypes.length + 1)]);
        enemy.lifePoints();
    }
}

function proxy(): void {
    const proxy = new InternetProxy();
    try {
        proxy.connectTo("www.twitter.com");
    } catch (e) {
        console.log(e);
    }

    try {
        proxy.connectTo("www.udemy.com");
    } catch (e) {
        console.log(e);
    }


}
//factoryMethod();
//abstractFactoryMethod();
//builderPattern();
//prototypePattern();
//singleton();

//chainOfResponsability();
//command();
//mediator();
//memento();
//observer();
//state();
//strategy();
//templateMethod();
//visitor();

//adapter();
//bridge();
//composite();
//decorator();
//facade();
//flyweight();
proxy();
