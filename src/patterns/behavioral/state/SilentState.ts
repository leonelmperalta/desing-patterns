import {MobileAlertState} from "./MobileAlertState";
import {MobileAlertStateContext} from "./MobileAlertStateContext";

export class SilentState implements MobileAlertState {
    alert(mobileAlertStateContext: MobileAlertStateContext): void {
        console.log('Movil en estado silencio.');
    }

}
