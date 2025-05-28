import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class Meteor1 extends Actor {
    constructor() {
        super({
            scale: new Vector(0.3,0.3)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Meteor1.toSprite())
        this.pos = new Vector(1440, Math.random() * 680 + 20)
        this.vel = new Vector(-300, 0)
    }


}