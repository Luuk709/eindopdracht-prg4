import { Actor, Engine, Vector, Animation, AnimationStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class DefaultEnemy extends Actor {
    #speed = 200;
    constructor() {
        super({
            width: 90,
            height: 40,
            vel: new Vector(Math.random()* 30 - 180,0),
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.DefaultEnemy.toSprite());
        this.graphics.flipHorizontal = true;
        const exhaustAnimation = new Animation({
            frames: [
                { graphic: Resources.EnemyExhaust1.toSprite(), duration: 80 },
                { graphic: Resources.EnemyExhaust2.toSprite(), duration: 80 },
                { graphic: Resources.EnemyExhaust3.toSprite(), duration: 80 },
                { graphic: Resources.EnemyExhaust4.toSprite(), duration: 80 },
            ],
            strategy: AnimationStrategy.Loop
        })
        const exhaust = new Actor({
            pos: new Vector(40, 0),
            scale: new Vector(1.5, 1.5)
        })
        exhaust.graphics.use(exhaustAnimation)
        exhaust.graphics.flipHorizontal = true
        this.addChild(exhaust)
    }
    hit(){
        this.scene.engine.addScore()
        console.log('aaa')
        this.kill()
    }

}