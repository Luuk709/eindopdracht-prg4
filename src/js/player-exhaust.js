import { Actor, Engine, Vector, Animation, AnimationStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class PlayerExhaust extends Actor {
    #normalAnimation = null
    #turboAnimation = null
    constructor() {
        super({
            pos: new Vector(-30, 0) 
        })
    }

    onInitialize(engine) {
        this.#normalAnimation = new Animation({
            frames: [
                { graphic: Resources.PlayerExhaust1.toSprite(), duration: 80 },
                { graphic: Resources.PlayerExhaust2.toSprite(), duration: 80 },
                { graphic: Resources.PlayerExhaust3.toSprite(), duration: 80 },
                { graphic: Resources.PlayerExhaust4.toSprite(), duration: 80 },
            ],
            strategy: AnimationStrategy.Loop
        })
        this.#turboAnimation = new Animation({
            frames: [
                { graphic: Resources.PlayerExhaustTurbo1.toSprite(), duration: 60 },
                { graphic: Resources.PlayerExhaustTurbo2.toSprite(), duration: 60 },
                { graphic: Resources.PlayerExhaustTurbo3.toSprite(), duration: 60 },
                { graphic: Resources.PlayerExhaustTurbo4.toSprite(), duration: 60 },
            ],
            strategy: AnimationStrategy.Loop
        })
        this.graphics.use(this.#normalAnimation)
    }

    setTurbo(on) {
        if (on) {
            this.graphics.use(this.#turboAnimation)
        } else {
            this.graphics.use(this.#normalAnimation)
        }
    }
}