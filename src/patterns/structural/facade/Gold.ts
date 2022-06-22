import {Credit} from "./Credit";

export class Gold implements Credit {
    showCredit(): void {
        console.log('La tarjeta Gold tiene un credito de 5.000');
    }
}
