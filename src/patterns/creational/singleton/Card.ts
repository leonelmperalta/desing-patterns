export class Card {
    private static INSTANCE: Card;
    private _cardNumber: String;
    private constructor() {}
    public static getInstance(): Card {
        if(!Card.INSTANCE) {
            Card.INSTANCE = new Card();
        }
        return Card.INSTANCE;
    }
    get cardNumber(): String {
        return this._cardNumber;
    }

    set cardNumber(value: String) {
        this._cardNumber = value;
    }

}
