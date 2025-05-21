import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/bg.png'),
    Fish: new ImageSource('images/fish.png'),
    PlayerShip: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship1/Ship1.png'),
    PlayerShots: new ImageSource('images/PNG_Animations/Shots/Shot1/shot1_4.png'),
    PlayerShootingSound: new Sound('sounds/shooting-sound.mp3'),
    DefaultEnemy: new ImageSource('images/PNG_Parts&Spriter_Animation/Ship2/Ship2.png'),

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }