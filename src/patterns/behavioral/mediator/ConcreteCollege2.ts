import {College} from "./College";
import {Mediator} from "./Mediator";

export class ConcreteCollege2 extends College {

    public constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: String): void {
        this.mediator.send(message, this);
    }

    messageReceived(message: String): void {
        console.log(`Colega 2 recibio: ${message}`);
    }

}
