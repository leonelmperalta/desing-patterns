import {College} from "./College";

export interface Mediator {
    send(message: String, colleage: College): void;
}
