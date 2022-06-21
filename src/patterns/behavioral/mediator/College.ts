import {Mediator} from "./Mediator";

export abstract class College {
    protected mediator: Mediator;

    public constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public abstract send(message: String): void;
    public abstract messageReceived(message: String): void;
}
