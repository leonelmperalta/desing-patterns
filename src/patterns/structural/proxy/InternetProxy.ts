import {Internet} from "./Internet";
import {AccessToInternet} from "./AccessToInternet";

export class InternetProxy implements Internet {
    private internet: Internet = new AccessToInternet();
    private static bannedUrls: String[] = ["www.twitter.com", "www.facebook.com", "www.instagram.com"];

    connectTo(url: String): void {
        if(InternetProxy.bannedUrls.includes(url)) {
            throw "Error, url no permitida";
        } else {
            console.log(`Conectado a: ${url}`);
        }
    }

}
