// https://andradearts.com/simple-button-class-for-phaser-3/
class ButtonState extends Phaser.GameObjects.Image 
{
    upFrameTrue;
    downFrameTrue;
    upFrameFalse;
    downFrameFalse;
    // overFrame;
    myCallback;
    myScope;
    state;

    constructor(_scene, _x, _y, _sprite, _upFrameTrue, _downFrameTrue, _upFrameFalse, _downFrameFalse, _callback)
    {
        super(_scene, _x, _y, _sprite, _upFrameTrue);

        this.upFrameTrue = _upFrameTrue;
        this.downFrameTrue = _downFrameTrue;
        this.upFrameFalse = _upFrameFalse;
        this.downFrameFalse = _downFrameFalse;
        // this.overFrame = _overFrame;
        this.myCallback = _callback;
        this.myScope = _scene; // scope
        this.state = true;

        this.setInteractive();
        this.on('pointerup', this.pointerUp, this);
        this.on('pointerdown', this.pointerDown, this);
        this.on('pointerover', this.pointerOver, this);
        this.on('pointerout', this.pointerOut, this);
        this.on("pointermove", this.pointerMove, this);

        
        _scene.add.existing(this);

    }

    pointerUp(pointer) 
    {
        if(this.state)
        {
            this.setFrame(this.upFrameTrue);
        }
        else
        {
            this.setFrame(this.upFrameFalse);
        }
        this.myCallback.call(this.myScope,false);
    }

    pointerDown(pointer) 
    {
        if(this.state)
        {
            this.setFrame(this.downFrameTrue);
        }
        else
        {
            this.setFrame(this.downFrameFalse);
        }
        this.myCallback.call(this.myScope,true);
    }

    pointerOver(pointer, x, y) 
    {
        if(this.state)
        {
            this.setFrame(this.downFrameTrue);
        }
        else
        {
            this.setFrame(this.downFrameFalse);
        }
        // this.myCallback.call(this.myScope,false);
    }

    pointerOut(pointer) 
    {
        if(this.state)
        {
            this.setFrame(this.upFrameTrue);
        }
        else
        {
            this.setFrame(this.upFrameFalse);
        }
        // this.myCallback.call(this.myScope,false);
    }

    // pointerMove
    pointerMove(pointer) 
    {
        if(this.state)
        {
            this.setFrame(this.upFrameTrue);
        }
        else
        {
            this.setFrame(this.upFrameFalse);
        }
        // this.myCallback.call(this.myScope,false);
        // console.log("__pointerMoveX__ " + pointer.upX + " - " + pointer.downX + " - " + pointer.x);
        // console.log("__pointerMoveY__ " + pointer.upY + " - " + pointer.downY + " - " + pointer.y);
    }
}

export default ButtonState;


//-------------------------------------------------------------------------------
// IMPLEMENTACION EN UNA ESCENA
// import ButtonState from '../gameObjects/ButtonState.js';
// create() 
// {
    // this.buttonVolume = new ButtonState( this,                   // _scene
    //     25, 25,                     // _x // _y
    //     'buttons_1',                 // _sprite
    //     117,                              // _upFrameTRUE
    //     217,                             // _downFrameTRUE
    //     119,                              // _upFrameFALSE
    //     219,                             // _downFrameFALSE
    //     this.buttonVolUpDown ).setScale(0.9);        // _callback
// }
// buttonVolUpDown(val) { this.volumeUpDown.isDown = val }
// update(time, delta) 
// {
    // if(this.volumeUpDown.isDown)
    // {
    //     this.volumeUpDown.isDown = false;
    //     this.buttonVolume.state = !this.buttonVolume.state;
    //     if (this.buttonVolume.state)
    //         this.audioTema.volume = 1;
    //     else
    //         this.audioTema.volume = 0.25;
    // }
// }
//-------------------------------------------------------------------------------





//-------------------------------------------------------------------------------
// var teclado = this.input.keyboard.createCursorKeys();
// this.key2 = {
//     "up":       teclado.up,
//     "down":     teclado.down,
//     "left":     teclado.left,
//     "right":    teclado.right,
//     "punch":     this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I),
//     "kick":   this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O),
//     "defense":  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P),
// };
// this.reInit = teclado.space;

// // BUTTONs
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// new Button( this,                   // _scene
//     this.width-40, 40,  // _x // _y
//     'buttons_wood',                 // _sprite
//     4,                              // _upFrame
//     11,                             // _downFrame
//     this.buttonStartGame   )        // _callback
//     .setScale(0.75);
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// }

// buttonStartGame(val) { this.reInit.isDown = val }

// if(this.reInit.isDown)
// {
//     this.audioTema.stop();
//     this.scene.restart();
// }
//-------------------------------------------------------------------------------