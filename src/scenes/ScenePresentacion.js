// import Player from '../gameObjects/Player.js';
// import Button from '../gameObjects/Button.js';
// import ButtonState from '../gameObjects/ButtonState.js';
// import ProgBar from '../gameObjects/ProgBar.js';

class ScenePresentacion extends Phaser.Scene 
{
    constructor() 
    {
        super({key: "ScenePresentacion"});
        this.lag = 0;
        this.fps = 8; //physics checks 60 times/frame
        this.frameduration = 1000/ this.fps;
    }

    init() 
    {
        console.log('Scene: ScenePresentacion');
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.centerW = this.width/2;
        this.centerH = this.height/2;

        // const {width, height} = this.scale;
        // console.log('this.scale: ', this.scale);
        // console.log('width: ', width);
        // console.log('height: ', height);
    }

    create()
    {
        // this.add.image(this.centerW, this.centerH, "mapa");
        // const particles = this.add.particles('red')
        // const emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // })
        // const logo = this.physics.add.image(400, 100, 'kombat_logo')
        // logo.setVelocity(100, 200)
        // logo.setBounce(1, 1)
        // logo.setCollideWorldBounds(true)
        // emitter.startFollow(logo)




        // Back
        this.add.image(this.centerW, this.centerH, "mapa");

        // Fisicas
        this.physics.world.setBoundsCollision(true, true, true, true); // conf. colisiones

        
        var style = { fontSize: '28px', fill: '#FFF' };
        this.textPOINT = this.add.text(50, 20, "Point: 0.00", style);
        this.textPOINT.setOrigin(0);

        this.textARROW = this.add.text(this.width-50, 20, "Arrow: 0.00", style);
        this.textARROW.setOrigin(1,0);

        
        
        // LOGOS
        // this.arrow = this.add.image(this.centerW, this.centerH, "kombat_logo");
        this.arrow = this.add.sprite(this.centerW, this.centerH, "arrow");
        this.arrow.setScale(1.25).setOrigin(0.12, 0.5);
        this.anims.create({
            key: 'anims_arrow',
            frames:     this.anims.generateFrameNumbers('arrow', {
                frames: [0,2,1,3]
            }),
            frameRate: 4,
            yoyo: false
        });

        // InPuts
        this.input.on(Phaser.Input.Events.POINTER_UP, this.handlePointerUp, this);
        this.input.on(Phaser.Input.Events.POINTER_MOVE, this.handlePointerMove, this);
    }

    handlePointerUp(pointer)
    {
        const targetRad = Phaser.Math.Angle.Between(
            this.arrow.x, this.arrow.y,
            pointer.x, pointer.y
        );
        const targetDeg = Phaser.Math.RadToDeg(targetRad);
        const current = this.arrow.angle;
        let diff = targetDeg - current;
        if (diff < -180)
            diff += 360;
        else if (diff > 180)
            diff -= 360;

        this.tweens.add({
            targets: this.arrow,
            angle: current + diff,
            ease: 'Sine.easeInOut', // 'Sine.easeInOut', 'Power1', 'Power2',
            durations: diff*2, //500,
            onUpdate: (tween) => {
                const valueDeg = tween.getValue();
                const valueRad = Phaser.Math.DegToRad(valueDeg).toFixed(2);

                const valueDeg2 = ((valueDeg + 360) % 360);
                this.textARROW.setText("Arrow: " + valueDeg2.toFixed(2));
            }
        });
    }

    handlePointerMove(pointer)
    {
        const targetRad = Phaser.Math.Angle.Between(
            this.arrow.x, this.arrow.y,
            pointer.x, pointer.y
        );
        const targetDeg = Phaser.Math.RadToDeg(targetRad);
        const targetDeg2 = ((targetDeg + 360) % 360);
        this.textPOINT.setText("Point: " + targetDeg2.toFixed(2));
    }



    update(timestamp, elapsed)
    {
        this.lag += elapsed;
        if (this.lag >= this.frameduration)
        {
            this.lag -= this.frameduration;
            this.render();
        }
    }
    render()
    {
        this.arrow.anims.play('anims_arrow',true);
    }
}
export default ScenePresentacion;

// https://www.youtube.com/watch?v=Q1baj2MExv4