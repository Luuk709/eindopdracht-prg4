import { Actor, Engine, Vector, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { EnemyShots } from "./enemy-shots.js";
export class ShootingEnemy extends Actor {
    #speed = 200;
    #shootTimer;
    game;
    constructor(game) {
        super({
            width: 90,
            height: 40,
            vel: new Vector(-100, 0),
        });
        this.game = game
    }

    onInitialize(engine) {
        this.graphics.use(Resources.ShootingEnemy.toSprite());
        this.graphics.flipHorizontal = true;
        this.#shootTimer = new Timer({
            fcn: () => this.shoot(engine),
            interval: 2000,
            repeats: true
        })
        engine.add(this.#shootTimer)
        
    }
    onPreUpdate(engine) {
        if (this.pos.x < 840) {
            this.vel = new Vector(0, 0)
            this.#shootTimer.start()
        }
    }
    shoot(engine) {
        const shot = new EnemyShots()
        shot.pos = this.pos.clone()
        this.game.add(shot)
        Resources.EnemyShootingSound.volume = 0.1
        Resources.EnemyShootingSound.playbackRate = 2.0
        Resources.EnemyShootingSound.play()
    }
    hit() {
        this.scene.engine.addScore()
        console.log('aaa')
        this.kill()
        this.#shootTimer.stop()
    }

}