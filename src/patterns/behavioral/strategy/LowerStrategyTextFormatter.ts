import {StrategyTextFormatter} from "./StrategyTextFormatter";

export class LowerStrategyTextFormatter implements StrategyTextFormatter {
    format(text: String): void {
        console.log(`Texto en minusculas: ${text.toLowerCase()}`);
    }
}
