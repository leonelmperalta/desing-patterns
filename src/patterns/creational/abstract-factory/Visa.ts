import {Card} from "./Card";

export class Visa implements Card {
    getCardNumber(): String {
        return '0123 0231 0541 VISA';
    }

    getCardType(): String {
        return 'VISA';
    }

}
