class Player extends Phaser.GameObjects.Sprite 
{
    constructor(scene, x, y, type, animsNames, live, energy, velocityX, velocityY) 
    {
        super(scene, x, y, type);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.immovable = true;
        this.body.setCollideWorldBounds(true);      // hab colision
        // this.body.setSize(this.body.width/2,this.body.height/2, true);
        // this.body.setOffset(this.body.width/3,0);

        this.animsNames = animsNames;
        this.live = live;
        this.energy = energy;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }
}

Player.prototype.moveLeft = function()
{
    this.body.setVelocityX(-this.velocityX);
}
Player.prototype.moveRight = function()
{
    this.body.setVelocityX(this.velocityX);
}

Player.prototype.moveUp = function()
{
    this.body.setVelocityY(-this.velocityY);
}
Player.prototype.moveDown = function()
{
    this.body.setVelocityY(this.velocityY);
}

export default Player;


// // Player1
// var animsNames1 = this.createanims("raiden", this.cache.json.get('animsPlayer1'));
// this.player1 = new Player(this, this.width/4, this.height-200, "raiden", animsNames1, 100, 100, velocityPlayer1, 0);        


// createanims(texture, animationArray) 
// {
//     var animationName = '{';
//     for (var i = 0; i < animationArray.length; i++) 
//     {
//         this.anims.create({
//             key:        animationArray[i].key,
//             frameRate:  animationArray[i].frameRate,
//             frames:     this.anims.generateFrameNumbers(texture, {
//                 frames: animationArray[i].frames
//             }),
//             repeat:         animationArray[i].repeat,
//             repeatDelay:    animationArray[i].repeatDelay,
//             yoyo:           animationArray[i].yoyo
//         });

//         animationName = animationName + '"' + animationArray[i].name + '":"' + animationArray[i].key + '",';
//     }
//     animationName = animationName.slice(0, animationName.length-1) + '}';
//     return JSON.parse(animationName);
// }





// player_keys(keyA, keyB, playerA, playerB, sentido)
// {
//     if(keyA.up.isDown)
//     {
//         playerA.anims.play(playerA.animsNames.up, true);
//     }
//     else if(keyA.down.isDown)
//     {
//         playerA.anims.play(playerA.animsNames.down, true);
//     }
//     else if(keyA.left.isDown)
//     {
//         playerA.moveLeft();
//         if (sentido)
//             playerA.anims.play(playerA.animsNames.back, true);
//         else
//             playerA.anims.play(playerA.animsNames.forward, true);
//     }
//     else if(keyA.right.isDown)
//     {
//         playerA.moveRight();
//         if (!sentido)
//             playerA.anims.play(playerA.animsNames.back, true);
//         else
//             playerA.anims.play(playerA.animsNames.forward, true);
//     }
//     //------------------------------------------------------------------------------------
//     else if (keyA.punch.isDown && (playerA.energy > 0)) 
//     {
//         playerA.anims.play(playerA.animsNames.punch, true);
//         this.audioPuno.play();
//         if (this.x_dif(playerA, playerB, 75)) 
//         {
//             if (!keyB.defense.isDown) 
//             {
//                 playerB.live -= 0.5;
//                 if (playerB.live <= 0) playerB.live = 0;

//                 playerB.anims.play(playerB.animsNames.punch_damage, true);
//             }
//             playerA.energy -= 0.25;
//             if (playerA.energy <= 0) playerA.energy = 0;
//         }
//     }
//     else if (keyA.kick.isDown && (playerA.energy > 0))
//     {
//         playerA.anims.play(playerA.animsNames.kick, true);
//         this.audioPatada.play();
//         if (this.x_dif(playerA, playerB, 75))
//         {
//             if (!keyB.defense.isDown) 
//             {
//                 playerB.live -= 0.5;
//                 if (playerB.live <= 0) playerB.live = 0;

//                 playerB.anims.play(playerB.animsNames.kick_damage, true);
//             }
//             playerA.energy -= 0.25;
//             if (playerA.energy <= 0) playerA.energy = 0;
//         }
//     }
//     else if (keyA.defense.isDown)
//     {
//         playerA.anims.play(playerA.animsNames.defense, true);
//     }
//     //------------------------------------------------------------------------------------
//     else 
//     {
//         if(!((keyB.punch.isDown || keyB.kick.isDown) && this.x_dif(playerA, playerB, 75) && !keyA.defense.isDown))
//         {
//             playerA.anims.play(playerA.animsNames.idle, true);
//             playerA.body.setVelocityX(0);
//         }
        
//     }
// }



// x_dif (plyr1, plyr2, limit)
// {
//     var result = false;
//    // var dif = (plyr1.x) - (plyr2.x);     // = Math.abs(plyr1.x - plyr2.x)
//    // if (dif < 0) dif = dif * (-1);
//     var dif = Math.abs(plyr1.x - plyr2.x)
//     if (dif < limit) result = true;
//     return result;
// }