import {Mediator} from "./Mediator";
import {College} from "./College";
import {ConcreteCollege1} from "./ConcreteCollege1";
import {ConcreteCollege2} from "./ConcreteCollege2";

export class ConcreteMediator implements Mediator {
    set user1(value: ConcreteCollege1) {
        this._user1 = value;
    }

    set user2(value: ConcreteCollege2) {
        this._user2 = value;
    }
    private _user1: ConcreteCollege1;
    private _user2: ConcreteCollege2;

    send(message: String, colleage: College): void {
        if (colleage == this._user1) {
            this._user2.messageReceived(message);
        } else {
            this._user1.messageReceived(message);
        }
    }

}
