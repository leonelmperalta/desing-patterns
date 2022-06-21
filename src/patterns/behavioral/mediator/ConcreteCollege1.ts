import {College} from "./College";
import {Mediator} from "./Mediator";

export class ConcreteCollege1 extends College {

    public constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: String): void {
        this.mediator.send(message, this);
    }

    messageReceived(message: String): void {
        console.log(`Colega 1 recibio: ${message}`);
    }

}
