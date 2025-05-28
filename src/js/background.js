import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    onInitialize(engine) {
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(640, 360)
        this.scale =  new Vector(3,3)
        this.vel = new Vector(-100, 0)
        this.anchor = Vector.Half
    }
     onPreUpdate(engine) {
        if (this.pos.x < 440) {
            this.pos.x = 640
        }
    }
}