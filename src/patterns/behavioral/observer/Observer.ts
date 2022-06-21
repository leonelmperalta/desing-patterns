import {Semaphore} from "./Semaphore";

export interface Observer {
    update(semaphore: Semaphore): void;
}
