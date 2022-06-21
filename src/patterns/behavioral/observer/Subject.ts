import {Observer} from "./Observer";
import {Semaphore} from "./Semaphore";

export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notifyUpdate(semaphore: Semaphore): void;
}
