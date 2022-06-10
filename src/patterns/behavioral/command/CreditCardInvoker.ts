import {Command} from "./Command";

export class CreditCardInvoker {
    private _command: Command;
    public constructor() {
    }
    set command(command: Command) {
        this._command = command;
    }
    public run(): void {
        this._command.execute();
    }
}
