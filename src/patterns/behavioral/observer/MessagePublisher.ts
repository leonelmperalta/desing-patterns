import {Subject} from "./Subject";
import {Observer} from "./Observer";
import {Semaphore} from "./Semaphore";

export class MessagePublisher implements Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    notifyUpdate(semaphore: Semaphore): void {
        this.observers.forEach((o: Observer) => {o.update(semaphore)});
    }

}
