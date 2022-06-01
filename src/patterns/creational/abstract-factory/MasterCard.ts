import {Card} from "./Card";

export class MasterCard implements Card {
    getCardNumber(): String {
        return '1230 2310 1231 MC00';
    }

    getCardType(): String {
        return 'MASTERCARD';
    }

}
