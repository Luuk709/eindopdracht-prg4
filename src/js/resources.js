import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/bg.png'),
    PlayerShip: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship1/Ship1.png'),
    PlayerExhaust: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship1/Exhaust/Normal_flight/Exhaust1/exhaust1.png'),
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