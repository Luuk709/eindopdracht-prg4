import { Actor, Engine, Vector, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class Player extends Actor {
    constructor() {
        super({
            width: 50,
            height: 50,
            pos: new Vector(100, 100),
        });
        this.speed = 233;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.PlayerShip.toSprite());
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0
            if (engine.input.keyboard.isHeld(Keys.Left) && !engine.input.keyboard.isHeld(Keys.Right) && this.pos.x > 30) {
                xspeed = -this.speed;
            }
            if (engine.input.keyboard.isHeld(Keys.Right) && !engine.input.keyboard.isHeld(Keys.Left) && this.pos.x < 1260) {
                xspeed = this.speed;
            }
            if (engine.input.keyboard.isHeld(Keys.Up) && !engine.input.keyboard.isHeld(Keys.Down) && this.pos.y > 30) {
                yspeed = -this.speed;
            }
            if (engine.input.keyboard.isHeld(Keys.Down) && !engine.input.keyboard.isHeld(Keys.Up) && this.pos.y < 700) {
                yspeed = this.speed;
            }
            if(engine.input.keyboard.wasPressed(Keys.Space)){
                this.scene.engine.shoot()
            }
            this.vel = new Vector(xspeed, yspeed);
        }
}