import {Observer} from "./Observer";
import {Semaphore} from "./Semaphore";
import {SemaphoreStatus} from "./SemaphoreStatus";

export class Car implements Observer {
    update(semaphore: Semaphore): void {
        if(semaphore.status === SemaphoreStatus.RED) {
            console.log('Semaforo rojo para coche --> coche no puede cruzar.');
        } else {
            console.log('Semaforo verde para coche --> coche puede cruzar.');
        }
    }

}
