import {Internet} from "./Internet";

export class AccessToInternet implements Internet{
    connectTo(url: String): void {
        console.log(`Conectando a: ${url}`);
    }
}
