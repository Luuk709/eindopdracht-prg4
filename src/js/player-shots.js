import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class PlayerShots extends Actor {
    constructor() {
        super({
            width: 13,
            height: 4, 
            vel: new Vector(500, 0)
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.PlayerShots.toSprite())
        this.on('collisionstart', (e) => {
                if (typeof e.other.owner.hit === "function") {
                e.other.owner.hit(this)
            }
        })
    }

    onPreUpdate(engine) {
    }
}