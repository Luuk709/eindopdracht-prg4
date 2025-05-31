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
        this.health = 3;
        this.shootCooldown = 0; // cooldown timer in ms
        this.shootCooldownTime = 300; // 300ms between shots
    }

    onInitialize(engine) {
        this.graphics.use(Resources.PlayerShip.toSprite());
        this.on('collisionstart', (e) => {
        if (typeof e.other.owner.hit === "function") {
                e.other.owner.hit()
                this.hit()
            }
    })
    }

    onPreUpdate(engine, delta) {
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
        if (this.shootCooldown > 0) {
            this.shootCooldown -= delta;
        }
        if (engine.input.keyboard.wasPressed(Keys.Space) && this.shootCooldown <= 0) {
            this.scene.engine.shoot()
            this.shootCooldown = this.shootCooldownTime;
        }
        this.vel = new Vector(xspeed, yspeed);
    }
    hit(){
        if (this.health === 1){
            this.kill()
            this.scene.engine.hitpoints[0].kill()
        }
        else{
        this.scene.engine.hitpoints[this.health-1].kill()
        this.health--
        }
    }

}