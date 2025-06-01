import { Actor, Timer, Vector } from "excalibur"
import { DefaultEnemy } from "./default-enemy.js"
import { Meteor1 } from './meteor1.js'
import { ShootingEnemy } from "./shooting-enemy.js"
import { HealthPowerup } from "./health-powerup.js"
export class Spawner extends Actor {
    #timesCalled = 0;
    game;
    constructor(game) {
        super()
        this.game = game
    }

    onInitialize(engine) {
        this.spawnTimer = new Timer({
            fcn: () => this.spawnEnemyPattern(),
            interval: Math.random() * 4000 + 2000,
            repeats: true
        })
        engine.add(this.spawnTimer)
        this.spawnTimer.start()
    }

    spawnEnemyPattern() {
        this.#timesCalled++
        if (this.#timesCalled < 5) {
            for (let i = 0; i < (Math.random() * 3); i++) {
                this.spawnDefaultEnemy()
                this.spawnMeteor()
            }
        } else {
            for (let i = 0; i < (Math.random() * 3); i++) {
                this.spawnDefaultEnemy()
                this.spawnMeteor()
                this.spawnShootingEnemy()
                this.spawnPowerup()
            }
        }

    }
    spawnDefaultEnemy() {
        const enemy = new DefaultEnemy()
        enemy.pos = new Vector(1440, Math.random() * 680 + 20),
            this.game.add(enemy)
    }
    spawnShootingEnemy(){
        const shootingEnemy = new ShootingEnemy(this.game)
        shootingEnemy.pos = new Vector(1440, Math.random() * 680 + 20),
            this.game.add(shootingEnemy)
    }
    spawnMeteor(){
        if(Math.floor(Math.random() * 4) === 1){
            const meteor1 = new Meteor1()
            this.game.add(meteor1)
        }
        

    }
    spawnPowerup(){
         if(Math.floor(Math.random() * 25) === 1){
            const healthPack = new HealthPowerup()
            this.game.add(healthPack)
        }
    }
}