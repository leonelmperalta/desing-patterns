import {Enemy} from "./Enemy";
import {EnemyType} from "./EnemyType";
import {Private} from "./Private";
import {Lieutenant} from "./Lieutenant";

export class EnemyFactory {
    private static enemies: Map<EnemyType, Enemy> = new Map();
    public static getEnemy(type: EnemyType): Enemy {
        let enemy: Enemy = null;
        if(this.enemies.has(type)) {
            enemy = this.enemies.get(type);
        } else {
            switch (type) {
                case EnemyType.PRIVATE: {
                    console.log('Soldado ha sido creado');
                    enemy = new Private();
                    break;
                }
                case EnemyType.LIEUTENANT: {
                    console.log('Teniente ha sido creado');
                    enemy = new Lieutenant();
                    break;
                }
                default: {
                    console.log('No se ha creado enemigo')
                }
            }
            this.enemies.set(type, enemy);
        }
        return enemy;
    }
}
