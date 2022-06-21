import {Observer} from "./Observer";
import {Semaphore} from "./Semaphore";
import {SemaphoreStatus} from "./SemaphoreStatus";

export class Pedestrian implements Observer {
    update(semaphore: Semaphore): void {
        if(semaphore.status === SemaphoreStatus.RED) {
            console.log('Semaforo verde para Peaton --> peaton puede cruzar.');
        } else {
            console.log('Semaforo rojo para peaton --> peaton no puede cruzar.');
        }
    }
}
