export interface AbstractFactory <T> {
    create(type: String) : T;
}
