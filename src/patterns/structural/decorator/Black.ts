import {Credit} from "./Credit";

export class Black implements Credit {
    showCredit(): void {
        console.log('El credito es de 1.000.000');
    }

}
