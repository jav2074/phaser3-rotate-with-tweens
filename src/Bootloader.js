class Bootloader extends Phaser.Scene 
{
    constructor() 
    {
        super({key: "Bootloader"});
    }

    preload() 
    {
        console.log('Bootloader');

        this.load.image('red', 'assets/img/particles/red.png');
        this.load.image('blue', 'assets/img/particles/blue.png');

        // buttons
        this.load.setPath('./assets/img/buttons');
        this.load.atlas('buttons_1', 
                        'button1.png', 
                        'button1_atlas.json');

        // Logos
        this.load.setPath('./assets/img/logo');
        // arrow_250x50
        this.load.spritesheet('arrow', 'arrow_250x50.png', { frameWidth: 250, frameHeight: 50 });
        
        // IMGs
        this.load.setPath('./');
        this.load.image('mapa', 'assets/img/space.png');
        
        // SPRITEs
        
        // ANIMs
        
        // AUDIOs

        // Complete?
        this.load.on('complete', () => {
            console.log('Bootloader Load complete');
            this.scene.start("ScenePresentacion");
        });


        // this.load.setBaseURL('http://labs.phaser.io');
        // this.load.image('sky', 'assets/skies/space3.png');
        // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        // this.load.image('red', 'assets/particles/red.png');
    }
}
export default Bootloader;