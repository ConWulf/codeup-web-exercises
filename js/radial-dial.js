
   "use strict"

function init() {



    let stage = new createjs.Stage("tempDial");
    let dash = new createjs.Shape();


    dash.graphics.beginStroke("red")
        .beginFill("red")
        .setStrokeStyle(2, "round")
        .moveTo(0, 0)
        .lineTo(100, 100)

    console.log(dash);
    stage.addChild(dash);
    stage.update();

}