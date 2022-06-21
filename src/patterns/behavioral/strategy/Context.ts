import {StrategyTextFormatter} from "./StrategyTextFormatter";

export class Context {
    private strategyTextFormatter: StrategyTextFormatter;
    public constructor(strategyTextFormatter: StrategyTextFormatter) {
        this.strategyTextFormatter = strategyTextFormatter;
    }
    public publishText(text:String) : void {
        this.strategyTextFormatter.format(text);
    }
}
