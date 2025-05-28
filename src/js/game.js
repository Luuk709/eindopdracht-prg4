import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Sound } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Player } from './player.js'
import { PlayerShots } from './player-shots.js'
import { Health } from './health.js'
import { PlayerExhaust } from './player-exhaust.js'
import { Spawner } from './spawner.js'

export class Game extends Engine {
    player
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const background = new Background()
        this.add(background)




        this.player = new Player()
        this.add(this.player)

        const spawner = new Spawner(this)
        this.add(spawner)

        this.hitpoints = [
            new Health(),
            new Health(),
            new Health()
        ]
        this.hitpoints.forEach((health, i) => {
            health.pos = new Vector(40 + i * 50, 40)
            this.add(health)
        })


        const playerExhaust = new PlayerExhaust()
        this.player.addChild(playerExhaust)
    }

    shoot() {
        const shot = new PlayerShots()
        shot.pos = this.player.pos.clone()
        this.add(shot)
        Resources.PlayerShootingSound.volume = 0.1
        Resources.PlayerShootingSound.playbackRate = 2.0
        Resources.PlayerShootingSound.play()
    }
}

new Game()
