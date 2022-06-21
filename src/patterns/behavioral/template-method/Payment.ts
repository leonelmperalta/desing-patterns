export abstract class Payment {
    abstract initializePayment(): void;
    abstract startPayment(): void;
    abstract endPayment(): void;

    public makePayment(): void {
        this.initializePayment();
        this.startPayment();
        this.endPayment();
    }
}
