function setup() {
    createCanvas(windowWidth, windowHeight - 180, WEBGL);
    background("#f6f1e8");


    brush.scaleBrushes(3);

    brush.set("rotring", "#181C14", 0.8);
    brush.noFill();
    brush.hatch(7, 15);

    brush.field("zigzag");

    brush.rect(10, 10, width - 20, 700 - 20, "center");


    brush.fill("#002185", 175);
    brush.hatch(2, 25);
    brush.circle(10, 20, 150, 0.3);
}



function draw() {

    //frameRate(10);
    // brush.line(15, 10, 200, 10);


}
