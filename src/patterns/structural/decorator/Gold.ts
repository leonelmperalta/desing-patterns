import {Credit} from "./Credit";

export class Gold implements Credit {
    showCredit(): void {
        console.log('El credito es de 500.000');
    }

}
