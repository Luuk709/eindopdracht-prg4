import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class Health extends Actor {
    constructor() {
        super({
            scale: new Vector(0.1,0.1)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Health.toSprite())
    }
}