import {Enemy} from "./Enemy";
import {WeaponType} from "./WeaponType";

export class Private implements Enemy {
    private weapon: WeaponType;
    private readonly life: String;

    public constructor() {
        this.life = "200";
    }

    lifePoints(): void {
        console.log(`La vida de un soldado son ${this.life}`);
    }

    setWeapon(weapon: WeaponType): void {
        this.weapon = weapon;
    }

}
