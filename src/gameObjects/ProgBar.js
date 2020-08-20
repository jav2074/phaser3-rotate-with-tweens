// this.liveProgBarPlayer1 = new ProgBar(
//     this,
//     {   x: this.centerW-30, y: 80,
//         width: 450, height: 40,
//         bgColor: 0x101010,
//         prgColor: 0x132FD3,
//         label: {text: "Live", font: "16px ARIAL", fill: "#FFFFFF", alignLeftRight: 'left', alignTopBottom: 'top'},
//         percent: {num: 100, font: "16px ARIAL", fill: "#FFFFFF", alignLeftRight: 'center', alignTopBottom: 'bottom'},
//         fixedToCamera: false,
//         flipped: true   }
// );

class ProgBar
{
    constructor(scene, config) 
    {
        this.scene = scene;
        this.config = config;

        var bar_x = config.x;
        if(config.flipped)
        {
            bar_x = config.x - config.width;
        }

        this.bgBar = this.scene.add.graphics({ fillStyle: { color: config.bgColor } });
        this.bgBar.fillRect(bar_x, config.y, config.width, config.height);
        
        this.prgBar = this.scene.add.graphics({ fillStyle: { color: config.prgColor } });
        // this.prgBar.fillRect(bar_x, config.y, config.width, config.height);

        var label_x = bar_x + (config.width / 2);   // center
        var labelOrigin_x = 0.5;   // center
        if(config.label.alignLeftRight == 'left')   // center left right
        {
            label_x = bar_x + (config.width * 0.01);
            labelOrigin_x = 0;
        }
        else if(config.label.alignLeftRight == 'right')   // center left right
        {
            label_x = bar_x + (config.width * 0.99);
            labelOrigin_x = 1;
        }
        var label_y = config.y + (config.height / 2);   // center
        var labelOrigin_y = 0.5;   // center
        if(config.label.alignTopBottom == 'top')   //  center top bottom
        {
            label_y = config.y + (config.height * 0.01);
            labelOrigin_y = 0;
        }
        else if(config.label.alignTopBottom == 'bottom')   // center top bottom
        {
            label_y = config.y + (config.height * 0.99);
            labelOrigin_y = 1;
        }
        this.textLabel = this.scene.add.text(
            label_x, 
            label_y,
            config.label.text, 
            { font: config.label.font, fill: config.label.fill }
        ).setOrigin(labelOrigin_x, labelOrigin_y);


        var percent_x = bar_x + (config.width / 2);   // center
        var percentOrigin_x = 0.5;   // center
        if(config.percent.alignLeftRight == 'left')   // center left right
        {
            percent_x = bar_x + (config.width * 0.01);
            percentOrigin_x = 0;
        }
        else if(config.percent.alignLeftRight == 'right')   // center left right
        {
            percent_x = bar_x + (config.width * 0.99);
            percentOrigin_x = 1;
        }
        var percent_y = config.y + (config.height / 2);   // center
        var percentOrigin_y = 0.5;   // center
        if(config.percent.alignTopBottom == 'top')   //  center top bottom
        {
            percent_y = config.y + (config.height * 0.01);
            percentOrigin_y = 0;
        }
        else if(config.percent.alignTopBottom == 'bottom')   // center top bottom
        {
            percent_y = config.y + (config.height * 0.99);
            percentOrigin_y = 1;
        }
        this.textPercent = this.scene.add.text(
            percent_x, 
            percent_y, 
            config.percent.num + '%', 
            { font: config.percent.font, fill: config.percent.fill }
        ).setOrigin(percentOrigin_x, percentOrigin_y);


        this.setPercent(config.percent.num);

        this.setFixedToCamera(config.fixedToCamera);
    }
}

ProgBar.prototype.setPercent = function(newValue)
{
    if(newValue < 0) newValue = 0;
    if(newValue > 100) newValue = 100;

    var newWidth =  (newValue * this.config.width) / 100;
    if(this.config.flipped) newWidth = newWidth * (-1);

    this.prgBar.clear();
    this.prgBar.fillRect(this.config.x, this.config.y, newWidth, this.config.height);
    this.textPercent.setText(newValue + '%');
};
ProgBar.prototype.getPercent = function()
{
    return this.textPercent.text;
}

ProgBar.prototype.setFixedToCamera = function(fixedToCamera) 
{
    this.bgBar.fixedToCamera = fixedToCamera;
    this.prgBar.fixedToCamera = fixedToCamera;
    this.textLabel.fixedToCamera = fixedToCamera;
    this.textPercent.fixedToCamera = fixedToCamera;
};

export default ProgBar;


        // // LIVEs
		// if (this.liveProgBarPlayer1.getPercent() != this.player1.live + '%') {
		// 	this.liveProgBarPlayer1.setPercent(this.player1.live);
		// 	if (this.player1.live <= 0) {
        //         this.playerWin = 2;
		// 	}
		// }
		// if (this.liveProgBarPlayer2.getPercent() != this.player2.live + '%') {
		// 	this.liveProgBarPlayer2.setPercent(this.player2.live);
		// 	if (this.player2.live <= 0) {
        //         this.playerWin = 1;
		// 	}
        // }