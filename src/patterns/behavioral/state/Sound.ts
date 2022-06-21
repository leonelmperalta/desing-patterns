import {MobileAlertState} from "./MobileAlertState";
import {MobileAlertStateContext} from "./MobileAlertStateContext";

export class Sound implements MobileAlertState {
    alert(mobileAlertStateContext: MobileAlertStateContext): void {
        console.log('Movil en estado sound');
    }

}
