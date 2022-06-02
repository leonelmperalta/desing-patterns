import {PrototypeCard} from "./PrototypeCard";

export class Visa implements PrototypeCard{
    private _name : String;

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    clone(): PrototypeCard {
        console.log('Clonando tarjeta visa...');
        return <Visa> Object.create(this);
    }

    getCard(): void {
        console.log('Esto es una tarjeta visa.')
    }

}
