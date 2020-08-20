import ScenePresentacion from './scenes/ScenePresentacion.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "phaser3-rotate-with-tweens",
    version: "0.1.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width:  960,     // 960x540 - 1.777777
        height: 540,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#000000",     // "#c7ecee",
    pixelArt: false,     // false // true
    input:
    {
		activePointers:3,       // MultiTouch
	},
    physics: {
        default: "arcade",
        "arcade": {
            // gravity: {y: 0, x: 0}, // y: 500,
            debug: false     // false // true
        }
    },
    scene: [
        Bootloader, 
        ScenePresentacion
    ]
};

const game = new Phaser.Game(config);
