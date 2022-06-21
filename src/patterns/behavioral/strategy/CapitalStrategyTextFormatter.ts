import {StrategyTextFormatter} from "./StrategyTextFormatter";

export class CapitalStrategyTextFormatter implements StrategyTextFormatter {
    format(text: String): void {
        console.log(`Texto en mayusculas: ${text.toUpperCase()}`);
    }

}
