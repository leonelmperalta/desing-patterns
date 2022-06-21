import {SemaphoreStatus} from "./SemaphoreStatus";

export class Semaphore {
    private _status: SemaphoreStatus;
    public constructor(status: SemaphoreStatus) {
        this._status = status;
    }
    get status(): SemaphoreStatus {
        return this._status;
    }
}
