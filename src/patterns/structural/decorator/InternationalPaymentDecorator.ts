import {CreditDecorator} from "./CreditDecorator";
import {Credit} from "./Credit";

export class InternationalPaymentDecorator extends CreditDecorator {
    public constructor(decoratedCredit: Credit) {
        super(decoratedCredit);
    }
    showCredit() {
        this.decoratedCredit.showCredit();
        this.configInternationalPayment();
    }

    private configInternationalPayment(): void{
        console.log('La tarjeta ha sido configurada para hacer pagos internacionales.')
    }


}
