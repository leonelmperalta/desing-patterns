import {Enemy} from "./Enemy";
import {WeaponType} from "./WeaponType";

export class Lieutenant implements Enemy {
    private weapon: WeaponType;
    private readonly life: String;

    public constructor() {
        this.life = "1000";
    }

    setWeapon(weapon: WeaponType): void {
        this.weapon = weapon;
    }

    lifePoints(): void {
        console.log(`La vida de un teniente es: ${this.life}`)
    }

}
