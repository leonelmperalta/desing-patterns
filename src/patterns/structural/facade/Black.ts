import {Credit} from "./Credit";

export class Black implements Credit {
    showCredit(): void {
        console.log('La tarjeta Black tiene un credito de 50.000');
    }
}
