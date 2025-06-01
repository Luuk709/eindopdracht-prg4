import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/bg.png'),
    PlayerShip: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship1/Ship1.png'),
    PlayerExhaust1: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Normal_flight/Ship1_normal_flight_001.png'),
    PlayerExhaust2: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Normal_flight/Ship1_normal_flight_003.png'),
    PlayerExhaust3: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Normal_flight/Ship1_normal_flight_005.png'),
    PlayerExhaust4: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Normal_flight/Ship1_normal_flight_007.png'),
    PlayerExhaustTurbo1: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Turbo_flight/Ship1_turbol_flight_001.png'),
    PlayerExhaustTurbo2: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Turbo_flight/Ship1_turbol_flight_003.png'),
    PlayerExhaustTurbo3: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Turbo_flight/Ship1_turbol_flight_005.png'),
    PlayerExhaustTurbo4: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Turbo_flight/Ship1_turbol_flight_007.png'),
    EnemyExhaust1: new ImageSource('images/PNG_Animations/Exhaust/Ship2/Normal_flight/Ship2_normal_flight_001.png'),
    EnemyExhaust2: new ImageSource('images/PNG_Animations/Exhaust/Ship2/Normal_flight/Ship2_normal_flight_003.png'),
    EnemyExhaust3: new ImageSource('images/PNG_Animations/Exhaust/Ship2/Normal_flight/Ship2_normal_flight_005.png'),
    EnemyExhaust4: new ImageSource('images/PNG_Animations/Exhaust/Ship2/Normal_flight/Ship2_normal_flight_007.png'),
    PlayerShots1: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_1.png'),
    PlayerShots2: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_2.png'),
    PlayerShots3: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_3.png'),
    PlayerShots4: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_4.png'),
    PlayerShotExplosion1: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_exp0.png'),
    PlayerShotExplosion2: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_exp1.png'),
    PlayerShotExplosion3: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_exp2.png'),
    PlayerShotExplosion4: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_exp3.png'),
    PlayerShotExplosion5: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_exp4.png'),
    PlayerHitSound: new Sound('sounds/player-hit.mp3'),
    PlayerDeathSound: new Sound('sounds/death.mp3'),
    PlayerShootingSound: new Sound('sounds/shooting-sound.mp3'),
    Health: new ImageSource('images/healtbar.png'),
    HealthPickup: new ImageSource('images/HP_Bonus.png'),
    HealthPickupSound: new Sound('sounds/health.mp3'),
    DefaultEnemy: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship2/Ship2.png'),
    ShootingEnemy: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship3/Ship3.png'),
    EnemyShots1: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_1.png'),
    EnemyShots2: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_2.png'),
    EnemyShots3: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_3.png'),
    EnemyShots4: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_4.png'),
    EnemyShots5: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_5.png'),
    EnemyShots6: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_6.png'),
    EnemyShootingSound: new Sound('sounds/enemy-shooting.mp3'),
    Meteor1: new ImageSource('images/meteors/Meteor_01.png'),
    Meteor2: new ImageSource('images/meteors/Meteor_02.png'),
    Meteor3: new ImageSource('images/meteors/Meteor_03.png'),
    Meteor4: new ImageSource('images/meteors/Meteor_04.png'),

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }