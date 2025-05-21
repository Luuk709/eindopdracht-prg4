import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Sound } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './Player.js'
import { PlayerShots } from './player-shots.js'
import { DefaultEnemy } from './default-enemy.js'

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
        const background = new Actor({
            width: 1280,
            height: 720,
            pos: new Vector(640, 360),
            scale: new Vector(2.4,2.4),
            anchor: Vector.Half
        })
        background.graphics.use(Resources.Background.toSprite())
        this.add(background)
        this.spawnNewEnemy()
        
        
        this.player = new Player()
        this.add(this.player)
    }

    spawnNewEnemy() {
        const enemy = new DefaultEnemy()
        this.add(enemy)
        enemy.on('kill', () => {
            this.spawnNewEnemy()
        })
    }
    shoot(){
        const shot = new PlayerShots()
        shot.pos = this.player.pos.clone()
        this.add(shot)
        Resources.PlayerShootingSound.volume = 0.1 
        Resources.PlayerShootingSound.playbackRate = 2.0 
        Resources.PlayerShootingSound.play()
    }
}

new Game()
