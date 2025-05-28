import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class PlayerExhaust extends Actor {
    pos
    constructor() {
        super({
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.PlayerExhaust.toSprite())
    }

    onPreUpdate(engine) {

            this.pos = this.parent.pos.add(new Vector(-100, 0))
        
    }
}