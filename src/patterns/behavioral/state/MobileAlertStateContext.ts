import {MobileAlertState} from "./MobileAlertState";
import {Sound} from "./Sound";

export class MobileAlertStateContext {
    private _currentState: MobileAlertState;
    public constructor() {
        this._currentState = new Sound();
    }
    alert(): void {
        this._currentState.alert(this);
    }
    set currentState(value: MobileAlertState) {
        this._currentState = value;
    }

}
