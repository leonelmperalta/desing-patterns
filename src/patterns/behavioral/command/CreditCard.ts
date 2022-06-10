export class CreditCard {
    public sendPinNumberToCustomer(): void {
        console.log('El pin number ha sido enviado al cliente');
    }
    public sendSMSToCustomerActivate(): void {
        console.log('Enviado SMS al cliente informando que su tarjeta fue activada');
    }
    public activate(): void {
        console.log('La tarjeta ha sido activada');
    }
    public deactivate(): void {
        console.log('La tarjeta ha sido desactivada');
    }
    public sendSMSToCustomerDeactivate(): void {
        console.log('Enviado SMS al cliente informado que la tarjeta ha sido desactivada');
    }
}
