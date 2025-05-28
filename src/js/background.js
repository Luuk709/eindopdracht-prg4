import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor(x) {
        super()
        this.startX = x
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(this.startX, 360)
        this.scale =  new Vector(4,4)
        this.vel = new Vector(-100, 0)
        this.anchor = Vector.Half
    }
     onPreUpdate(engine) {
        if (this.pos.x < -640) {
            this.pos.x += 1280 * 2
        }
    }
}