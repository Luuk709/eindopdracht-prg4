import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Player } from "./Player.js"
export class HealthPowerup extends Actor {
    constructor() {
        super({
            width: Resources.HealthPickup.width,
            height: Resources.HealthPickup.height,
            scale: new Vector(0.2, 0.2),
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.HealthPickup.toSprite())
        this.pos = new Vector(1440, Math.random() * 680 + 20)
        this.vel = new Vector(-100, 0)
        this.on('collisionstart', (e) => {
            if (e.other.owner instanceof Player) {
                if (e.other.owner.health < 3) {
                    e.other.owner.health++
                    engine.hitpoints[e.other.owner.health - 1]?.kill()
                    engine.hitpoints[e.other.owner.health - 1] = null

                    const Health = engine.hitpoints[0].constructor
                    const newHealth = new Health()
                    newHealth.pos = new Vector(40 + (e.other.owner.health - 1) * 50, 40)
                    engine.add(newHealth)
                    engine.hitpoints[e.other.owner.health - 1] = newHealth
                }
                Resources.HealthPickupSound.volume = 0.1
                Resources.HealthPickupSound.play()
                this.kill()
            }
        })
    }
}
