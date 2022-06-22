import {Payment} from "./Payment";
import {CreditCardType} from "./CreditCardType";
import {Adapter} from "./Adapter";

export class CreditCard implements Payment {
    adapter: Adapter;

    pay(type: CreditCardType): void {
        if(type === CreditCardType.CLASSIC) {
            console.log('Tarjeta CLASSIC: Pago sin seguridad');
        } else if (type === CreditCardType.GOLD){
            this.adapter = new Adapter(CreditCardType.GOLD);
            this.adapter.pay(CreditCardType.GOLD);
        } else if (type === CreditCardType.BLACK) {
            this.adapter = new Adapter(CreditCardType.BLACK);
            this.adapter.pay(CreditCardType.BLACK);
        } else {
            console.log('No se reconoce la tarjeta.');
        }
    }
}
