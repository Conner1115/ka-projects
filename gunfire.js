 var codeSource = function(processingInstance) {
    with (processingInstance) {
(function() {
	this[["KAInfiniteLoopCount"]] = -Infinity;
})();
        size(600,600);
frameRate(60);
smooth();
textFont(createFont("Orbitron"));
textAlign(CENTER);
var scene;
var drawGun = function(type,x,y,s,r){
    switch(type){
        case "AK47":{
            pushMatrix();
            translate(x,y);
            scale(s);
            rotate(r);
            fill(100);
            noStroke();
            rect(0,0,100,10);
            fill(120);
            rect(0,0,100,3);
            fill(80);
            rect(0,8,100,2);
            rect(90,-5,3,5,5,0,5,0);
            fill(112, 78, 9);
            rect(-80,0,80,20,0,0,10,0);
            fill(130,90,9);
            rect(-80,0,80,5);
            fill(80);
            rect(-50,0,15,8);
            fill(70);
            rect(-47,0,9,6);
            rotate(20);
            fill(112, 78, 9);
            rect(-60,35,10,30,0,0,0,5);
            rect(-55,62,10,3);
            fill(130,90,9);
            rect(-60,45,3,15,0,0,0,5);
            fill(82, 57, 6);
            rect(-53,38,3,25,0,0,0,5);
            rotate(-20);
            noFill();
            stroke(100);
            strokeWeight(3);
            arc(-60,20,20,15,0,100);
            line(-60,20,-58,23);
            strokeCap(SQUARE);
            strokeWeight(20);
            arc(20,20,100,100,120,180);
            stroke(80);
            strokeWeight(5);
            arc(20,20,100,100,130,180);
            noStroke();
            fill(112, 78, 9);
            rect(-90,0,10,20,0,0,0,5);
            rect(-100,0,10,15,5,0,0,0);
            rect(-150,0,50,15,5,0,0,0);
            rect(-150,10,45,10,0,0,5,0);
            rect(-150,20,40,5,0,0,5,0);
            rect(-150,20,35,10,0,0,5,0);
            rect(-150,25,20,10,0,0,5,0);
            fill(130,90,9);
            rect(-150,0,70,5,5,0,0,0);
            popMatrix();
            
        }break;
        case "AK47-Black":{
            pushMatrix();
            translate(x,y);
            scale(s);
            rotate(r);
            fill(0);
            noStroke();
            rect(0,0,100,10);
            fill(0);
            rect(0,0,100,3);
            fill(0);
            rect(0,8,100,2);
            rect(90,-5,3,5,5,0,5,0);
            fill(0);
            rect(-80,0,80,20,0,0,10,0);
            fill(0);
            rect(-80,0,80,5);
            fill(0);
            rect(-50,0,15,8);
            fill(0);
            rect(-47,0,9,6);
            rotate(20);
            fill(0);
            rect(-60,35,10,30,0,0,0,5);
            rect(-55,62,10,3);
            fill(0);
            rect(-60,45,3,15,0,0,0,5);
            fill(0);
            rect(-53,38,3,25,0,0,0,5);
            rotate(-20);
            noFill();
            stroke(0);
            strokeWeight(3);
            arc(-60,20,20,15,0,100);
            line(-60,20,-58,23);
            strokeCap(SQUARE);
            strokeWeight(20);
            arc(20,20,100,100,120,180);
            stroke(0);
            strokeWeight(5);
            arc(20,20,100,100,130,180);
            noStroke();
            fill(0);
            rect(-90,0,10,20,0,0,0,5);
            rect(-100,0,10,15,5,0,0,0);
            rect(-150,0,50,15,5,0,0,0);
            rect(-150,10,45,10,0,0,5,0);
            rect(-150,20,40,5,0,0,5,0);
            rect(-150,20,35,10,0,0,5,0);
            rect(-150,25,20,10,0,0,5,0);
            fill(0);
            rect(-150,0,70,5,5,0,0,0);
            popMatrix();
            
        }break;
        case "Pistol":{
        pushMatrix();
        translate(x,y);
        rotate(r);
        scale(s);
        noFill();
        stroke(80);
        arc(13,15,30,15,0,90);
        line(5,5,20,17);
        noStroke();
        fill(100);
        rect(0,0,50,12,5,0,5,0);
        rect(0,10,40,5,0,0,5,0);
        rotate(20);
        rect(10,0,12,30);
        fill(120);
        rect(10,10,3,20);
        fill(90);
        rect(10,28,15,2);
        rotate(-20);
        fill(120);
        rect(0,0,50,5,5,0,5,0);
        popMatrix();
        }break;
        case "Pistol-Black":{
        pushMatrix();
        translate(x,y);
        rotate(r);
        scale(s);
        fill(0);
        rect(0,0,50,12,5,0,5,0);
        rect(0,10,40,5,0,0,5,0);
        rotate(20);
        rect(10,0,12,30);
        rect(10,28,15,2);
        rotate(-20);
        noFill();
        stroke(0);
        arc(13,15,30,15,0,90);
        line(5,5,20,17);
        noStroke();
        popMatrix();
        }break;
    }
};
var a = 0.01;
var menu = function(){
    a+=0.03;if(a > 2.5){a = 0;}for(var i = 0; i < width; i++){stroke(i/a*1);line(i+50, 0, i-50, 600);}var metalicTexture = get(0, 0, width, height);background(0,0,0);
    for(var i = 0; i < height; i+=25){fill(i/2,i/4,0);noStroke();rect(0,i,width,25);}textSize(50);for(var i = 50; i < 100; i+=2){textSize(i);fill((i*2)+100,(i*2),0);text("Gunfire",300,100);}textSize(100);fill(100);text("Gunfire",300,100);textSize(40);text("Play",300,240);text("Shop",300,310);text("Levels",300,380);text("About",300,450);var metalicText = get(0,0,600,600);metalicTexture.mask(metalicText);image(metalicTexture, 0, 0);fill(255,10);stroke(0);strokeWeight(3);if(mouseX > 150&&mouseY > 200&&mouseX < 150+300&&mouseY < 260){fill(255,50);cursor(HAND);}else{fill(255,10);cursor(ARROW);}rect(150,200,300,60,20,0,20,0);if(mouseX > 150&&mouseY > 270&&mouseX < 150+300&&mouseY < 270+60){fill(255,50);cursor(HAND);}else{fill(255,10);}rect(150,270,300,60,20,0,20,0);if(mouseX > 150&&mouseY > 340&&mouseX < 150+300&&mouseY < 340+60){fill(255,50);cursor(HAND);}else{fill(255,10);}rect(150,340,300,60,20,0,20,0);if(mouseX > 150&&mouseY > 410&&mouseX < 150+300&&mouseY < 410+60){fill(255,50);cursor(HAND);}else{fill(255,10);}rect(150,410,300,60,20,0,20,0);mouseClicked = function(){if(mouseX > 150&&mouseY > 200&&mouseX < 150+300&&mouseY < 260){scene = "game";}if(mouseX > 150&&mouseY > 270&&mouseX < 150+300&&mouseY < 270+60){scene = "shop";}if(mouseX > 150&&mouseY > 340&&mouseX < 150+300&&mouseY < 340+60){scene = "levels";}if(mouseX > 150&&mouseY > 410&&mouseX < 150+300&&mouseY < 410+60){scene = "about";}};drawGun("AK47-Black",500,300,1,-90);pushMatrix();scale(-1,1);drawGun("AK47-Black",-100,300,1,-90);popMatrix();drawGun("Pistol-Black",50,500,2,0);pushMatrix();scale(-1,1);drawGun("Pistol-Black",-550,500,2,0);popMatrix();
};
draw = function() {
background(255);
menu();
};
    }};

// Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("game"); 
  // Pass the function to ProcessingJS constructor
  var RenderPJS = new Processing(canvas, codeSource); 