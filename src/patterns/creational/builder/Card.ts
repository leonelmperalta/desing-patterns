export class Card {
    private readonly cardType : String;
    private readonly number : String;
    private readonly name : String;
    private readonly expires: number;
    private readonly credit: boolean;

    constructor(builder: CardBuilder) {
        this.cardType = builder.cardType;
        this.number = builder.number;
        this.name = builder.name;
        this.expires = builder.expires;
        this.credit = builder.credit;
    }
}

export class CardBuilder {
    private _cardType : String;
    private _number : String;
    private _name : String;
    private _expires: number;
    private _credit: boolean;

    public constructor(cardType: String, number: String) {
        this._cardType = cardType;
        this._number = number;
    }

    public setName(name: String) : CardBuilder {
        this._name = name;
        return this;
    }

    public setExpires(expires: number) : CardBuilder {
        this._expires = expires;
        return this;
    }

    public setCredit(credit: boolean) : CardBuilder {
        this._credit = credit;
        return this;
    }

    public build() : Card {
        return new Card(this);
    }

    get cardType(): String {
        return this._cardType;
    }

    get number(): String {
        return this._number;
    }

    get name(): String {
        return this._name;
    }

    get expires(): number {
        return this._expires;
    }

    get credit(): boolean {
        return this._credit;
    }

}
