import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class Meteor1 extends Actor {
    constructor() {
        super({
            width: Resources.Meteor1.width,
            height: Resources.Meteor1.height,
            scale: new Vector(0.3,0.3)
        })
    }

    onInitialize(engine) {
        const meteorIndex = Math.floor(Math.random() * 4) + 1
        this.graphics.use(Resources["Meteor" + meteorIndex].toSprite())
        this.pos = new Vector(1440, Math.random() * 680 + 20)
        this.acc = new Vector(Math.random() * 10 - 110, 0)
    }
    hit(){
        this.kill()
    }

}