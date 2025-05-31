import { Actor, Engine, Vector, Animation, AnimationStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class PlayerExhaust extends Actor {
    pos
    constructor() {
        super({
        })
    }

    onInitialize(engine) {
        // Exhaust animation frames (adjust paths if needed)
        const exhaustAnimation = new Animation({
            frames: [
                { graphic: Resources.PlayerExhaust.toSprite(), duration: 80 },
                // Add more frames if you have them, e.g.:
                // { graphic: Resources.PlayerExhaust2.toSprite(), duration: 80 },
                // { graphic: Resources.PlayerExhaust3.toSprite(), duration: 80 },
            ],
            strategy: AnimationStrategy.Loop
        })
        this.graphics.use(exhaustAnimation)
    }

    onPreUpdate(engine) {

            this.pos = this.parent.pos.add(new Vector(-100, 0))
        
    }
}