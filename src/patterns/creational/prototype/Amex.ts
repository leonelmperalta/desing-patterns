import {PrototypeCard} from "./PrototypeCard";

export class Amex implements PrototypeCard {

    private _name: String;

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    getCard(): void {
        console.log('Esto es una tarjeta Amex.');
    }

    clone(): PrototypeCard {
        console.log('Clonando tarjeta Amex...');
        return <Amex> Object.create(this);
    }

}
