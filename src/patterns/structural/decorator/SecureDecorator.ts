import {CreditDecorator} from "./CreditDecorator";
import {Credit} from "./Credit";

export class SecureDecorator extends CreditDecorator {
    public constructor(decoratedCredit: Credit) {
        super(decoratedCredit);
    }


    showCredit() {
        this.decoratedCredit.showCredit();
        this.configSecure();
    }

    private configSecure(): void {
        console.log('La Tarjeta ha sido configurada con seguridad maxima.');
    }
}
