import { Actor, Engine, Vector, Animation, AnimationStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { DefaultEnemy } from "./default-enemy.js";
import { ShootingEnemy } from "./shooting-enemy.js"
export class PlayerShots extends Actor {
    constructor() {
        super({
            width: 13,
            height: 4,
            vel: new Vector(500, 0)
        });
    }


    onInitialize(engine) {
        const shotAnimation = new Animation({
            frames: [
                { graphic: Resources.PlayerShots1.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots2.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots3.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots4.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots3.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots4.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots3.toSprite(), duration: 300 },
                { graphic: Resources.PlayerShots4.toSprite(), duration: 300 },
            ],
        })
        const shotExplosion = new Animation({
            frames: [
                { graphic: Resources.PlayerShotExplosion1.toSprite(), duration: 100 },
                { graphic: Resources.PlayerShotExplosion2.toSprite(), duration: 100 },
                { graphic: Resources.PlayerShotExplosion3.toSprite(), duration: 100 },
                { graphic: Resources.PlayerShotExplosion4.toSprite(), duration: 100 },
                { graphic: Resources.PlayerShotExplosion5.toSprite(), duration: 100 },
            ],
            strategy: AnimationStrategy.End
        })
        this.graphics.use(shotAnimation)
        this.on('collisionstart', (e) => {
            if (e.other.owner instanceof DefaultEnemy || e.other.owner instanceof ShootingEnemy) {
                this.vel = new Vector(0, 0)
                this.graphics.use(shotExplosion)
                e.other.owner.hit()
                shotExplosion.events.once('end', () => this.kill())
            }
        })
    }

    onPreUpdate(engine) {
    }
}