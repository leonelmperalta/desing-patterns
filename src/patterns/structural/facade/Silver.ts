import {Credit} from "./Credit";

export class Silver implements Credit {
    showCredit(): void {
        console.log('La tarjeta Silver tiene un credito de 15.000');
    }
}
