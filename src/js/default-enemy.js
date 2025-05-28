import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class DefaultEnemy extends Actor {
    constructor() {
        super({
            width: 90,
            height: 40,
            vel: new Vector(-160,0),
        });
        this.speed = 200;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.DefaultEnemy.toSprite());
        this.graphics.flipHorizontal = true;
    }
    hit(){
        console.log('aaa')
        this.kill()
    }

}