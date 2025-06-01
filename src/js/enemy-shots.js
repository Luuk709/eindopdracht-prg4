import { Actor, Vector, Animation, AnimationStrategy } from "excalibur"
import { Resources } from './resources.js'
export class EnemyShots extends Actor {
    constructor() {
        super({
            width: 13,
            height: 10,
            vel: new Vector(-400, 0)
        });
    }

    onInitialize(engine) {
        const shotAnimation = new Animation({
            frames: [
                { graphic: Resources.EnemyShots1.toSprite(), duration: 200 },
                { graphic: Resources.EnemyShots2.toSprite(), duration: 200 },
                { graphic: Resources.EnemyShots3.toSprite(), duration: 200 },
                { graphic: Resources.EnemyShots4.toSprite(), duration: 200 },
                { graphic: Resources.EnemyShots5.toSprite(), duration: 200 },
                { graphic: Resources.EnemyShots6.toSprite(), duration: 200 },
            ],
        })
        this.graphics.use(shotAnimation)
    }

    onPreUpdate(engine) {}
    hit(){
        this.kill()
    }
}

