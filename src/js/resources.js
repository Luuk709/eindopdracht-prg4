import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/bg.png'),
    PlayerShip: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship1/Ship1.png'),
    PlayerExhaust: new ImageSource('images/PNG_Animations/Exhaust/Ship1/Normal_flight/exhaust1.png'),
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
    PlayerShootingSound: new Sound('sounds/shooting-sound.mp3'),
    Health: new ImageSource('images/healtbar.png'),
    DefaultEnemy: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship2/Ship2.png'),
    ShootingEnemy: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship3/Ship3.png'),
    EnemyShots1: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_1.png'),
    EnemyShots2: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_2.png'),
    EnemyShots3: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_3.png'),
    EnemyShots4: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_4.png'),
    EnemyShots5: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_5.png'),
    EnemyShots6: new ImageSource('images/PNG_Animations/Shots/Shot2/shot2_6.png'),
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