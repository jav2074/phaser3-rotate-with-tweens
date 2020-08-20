// https://andradearts.com/simple-button-class-for-phaser-3/
class Button extends Phaser.GameObjects.Image 
{
    upFrame;
    downFrame;
    overFrame;
    myCallback;
    myScope;

    constructor(_scene, _x, _y, _sprite, _upFrame, _downFrame, _callback)
    {
        super(_scene, _x, _y, _sprite, _upFrame);

        this.upFrame = _upFrame;
        this.downFrame = _downFrame;
        // this.overFrame = _overFrame;
        this.myCallback = _callback;
        this.myScope = _scene; // scope

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
        this.setFrame(this.upFrame);
        this.myCallback.call(this.myScope,false);
    }

    pointerDown(pointer) 
    {
        this.setFrame(this.downFrame);
        this.myCallback.call(this.myScope,true);
    }

    pointerOver(pointer, x, y) 
    {
        this.setFrame(this.downFrame);
        // this.myCallback.call(this.myScope,false);
    }

    pointerOut(pointer) 
    {
        this.setFrame(this.upFrame);
        // this.myCallback.call(this.myScope,false);
    }

    // pointerMove
    pointerMove(pointer) 
    {
        this.setFrame(this.upFrame);
        // this.myCallback.call(this.myScope,false);
        // console.log("__pointerMoveX__ " + pointer.upX + " - " + pointer.downX + " - " + pointer.x);
        // console.log("__pointerMoveY__ " + pointer.upY + " - " + pointer.downY + " - " + pointer.y);
    }
}

export default Button;


//-------------------------------------------------------------------------------
// IMPLEMENTACION EN UNA ESCENA
// import Button from '../gameObjects/Button.js';
// create() 
// {
//     new Button( this,                   // _scene
//                 this.center_width/2,    // _x
//                 this.center_height/2,   // _y
//                 'buttons_wood',         // _sprite
//                 0,                      // _upFrame
//                 7,                      // _downFrame
//                 this.buttonUp   );      // _callback
// }
// buttonUp(val)
// {
//     this.btn_U_isDown = val;
// }
// update(time, delta) 
// {
//     if(this.btn_U_isDown)
//         console.log('btn_U_isDown: ' + this.btn_U_isDown);
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