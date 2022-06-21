import {MobileAlertState} from "./MobileAlertState";
import {MobileAlertStateContext} from "./MobileAlertStateContext";

export class VibrationState implements MobileAlertState {
    alert(mobileAlertStateContext: MobileAlertStateContext): void {
        console.log('Movil en estado de vibracion.');
    }

}
