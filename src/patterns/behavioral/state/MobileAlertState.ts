import {MobileAlertStateContext} from "./MobileAlertStateContext";

export interface MobileAlertState {
    alert(mobileAlertStateContext: MobileAlertStateContext): void;
}
