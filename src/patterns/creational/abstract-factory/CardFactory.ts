import {Card} from "./Card";
import { Visa } from "./Visa";
import {MasterCard} from "./MasterCard";
import {AbstractFactory} from "./AbstractFactory";

export class CardFactory implements AbstractFactory<Card> {
    create(type: String): Card {
        if(type === 'VISA') {
            return new Visa();
        } else if (type === 'MASTERCARD') {
            return new MasterCard();
        }
        return null;
    }
}
