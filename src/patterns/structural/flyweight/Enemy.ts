import {WeaponType} from "./WeaponType";

export interface Enemy {
    setWeapon(weapon: WeaponType): void;
    lifePoints(): void;
}
